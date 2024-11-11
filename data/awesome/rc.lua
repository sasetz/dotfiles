-- If LuaRocks is installed, make sure that packages installed through it are
-- found (e.g. lgi). If LuaRocks is not installed, do nothing.
pcall(require, "luarocks.loader")
local awesome = _G.awesome
local client = _G.client

-- Standard awesome library
local gears = require("gears")
local awful = require("awful")
require("awful.autofocus")
-- Widget and layout library
local wibox = require("wibox")
-- Theme handling library
local beautiful = require("beautiful")
-- Notification library
local naughty = require("naughty")
local menubar = require("menubar")
local hotkeys_popup = require("awful.hotkeys_popup")
local net_widgets = require("net_widgets")

-- Enable hotkeys help widget for VIM and other apps
-- when client with a matching name is opened:
require("awful.hotkeys_popup.keys")

-- {{{ Error handling
-- Check if awesome encountered an error during startup and fell back to
-- another config (This code will only ever execute for the fallback config)
if awesome.startup_errors then
    naughty.notify({
        preset = naughty.config.presets.critical,
        title = "Oops, there were errors during startup!",
        text = awesome.startup_errors
    })
end

-- Handle runtime errors after startup
do
    local in_error = false
    awesome.connect_signal("debug::error", function(err)
        -- Make sure we don't go into an endless error loop
        if in_error then return end
        in_error = true

        naughty.notify({
            preset = naughty.config.presets.critical,
            title = "Oops, an error happened!",
            text = tostring(err)
        })
        in_error = false
    end)
end
-- }}}

-- {{{ Variable definitions
-- Themes define colours, icons, font and wallpapers.
beautiful.init('/home/sasetz/.config/awesome/theme.lua')

-- This is used later as the default terminal and editor to run.
local terminal = "alacritty"
local editor = "nvim"
local editor_cmd = terminal .. " -e " .. editor

-- Default modkey.
-- Usually, Mod4 is the key with a logo between Control and Alt.
-- If you do not like this or do not have such a key,
-- I suggest you to remap Mod4 to another key using xmodmap or other tools.
-- However, you can use another modifier like Mod1, but it may interact with others.
local modkey = "Mod4"

-- Table of layouts to cover with awful.layout.inc, order matters.
awful.layout.layouts = {
    awful.layout.suit.tile,
    awful.layout.suit.floating,
}

local function lock_screen()
    awful.spawn.with_shell("light-locker-command --lock")
end
-- }}}

-- {{{ Menu
-- Create a launcher widget and a main menu
local myawesomemenu = {
    { "hotkeys",     function() hotkeys_popup.show_help(nil, awful.screen.focused()) end },
    { "manual",      terminal .. " -e man awesome" },
    { "edit config", editor_cmd .. " " .. awesome.conffile },
    { "restart",     awesome.restart },
    { "quit",        function() awesome.quit() end },
}

local mymainmenu = awful.menu({
    items = { { "awesome", myawesomemenu, beautiful.awesome_icon },
        { "open terminal", terminal }
    }
})

local mylauncher = awful.widget.launcher({
    image = beautiful.awesome_icon,
    menu = mymainmenu
})

-- Menubar configuration
menubar.utils.terminal = terminal -- Set the terminal for applications that require it
-- }}}

-- {{{Keyboard map indicator and switcher
local mykeyboardlayout = awful.widget.keyboardlayout()

local function generate_tag(name, icon, key, layout)
    return {
        name = name,
        icon = icon,
        key = key,
        layout = layout,
    }
end

local l = awful.layout.suit
local tags = {
    generate_tag("terminal", "  ", "#10", l.tile), -- 1
    generate_tag("browser", " 󰈹 ", "#11", l.tile), -- 2
    generate_tag("files", " 󰪶 ", "#12", l.tile), -- 3
    generate_tag("passwords", " 󰌆 ", "#24", l.tile), -- q
    generate_tag("telegram", "  ", "#25", l.tile), -- w
    generate_tag("discord", " 󰙯 ", "#26", l.tile), -- e
    generate_tag("music", " 󰓇 ", "#38", l.tile), -- a
    generate_tag("view", " 󰋩 ", "#39", l.tile), -- s
    generate_tag("miscellaneous", " 󰂓 ", "#40", l.floating), -- d
}

function tags.get_names()
    local tag_names = {}
    for index, value in ipairs(tags) do
        tag_names[index] = value.icon
    end
    return tag_names
end

function tags.get_layouts()
    local tag_names = {}
    for index, value in ipairs(tags) do
        tag_names[index] = value.layout
    end
    return tag_names
end

--}}}

-- {{{ Wibar
-- Create a textclock widget
local mytextclock = wibox.widget.textclock()

local logout_menu_widget = require("awesome-wm-widgets.logout-menu-widget.logout-menu")
local battery_widget = require("awesome-wm-widgets.battery-widget.battery")
local volume_widget = require("awesome-wm-widgets.pactl-widget.volume")

-- Create a wibox for each screen and add it

-- these next two tables define how taglist and tasklist buttons are going to
-- behave when they are clicked under different circumstances
-- for example, if the user clicks with the left mouse button without modkeys,
-- it will view the selected tag
local taglist_buttons = gears.table.join(
    awful.button({}, awful.button.LEFT, function(t) t:view_only() end),
    awful.button({ modkey }, awful.button.LEFT, function(t)
        if client.focus then
            client.focus:move_to_tag(t)
        end
    end),
    awful.button({}, 3, awful.tag.viewtoggle),
    awful.button({ modkey }, 3, function(t)
        if client.focus then
            client.focus:toggle_tag(t)
        end
    end),
    awful.button({}, 4, function(t) awful.tag.viewnext(t.screen) end),
    awful.button({}, 5, function(t) awful.tag.viewprev(t.screen) end)
)

local tasklist_buttons = gears.table.join(
    awful.button({}, 1, function(c)
        if c == client.focus then
            c.minimized = true
        else
            c:emit_signal(
                "request::activate",
                "tasklist",
                { raise = true }
            )
        end
    end),
    awful.button({}, 3, function()
        awful.menu.client_list({ theme = { width = 250 } })
    end),
    awful.button({}, 4, function()
        awful.client.focus.byidx(1)
    end),
    awful.button({}, 5, function()
        awful.client.focus.byidx(-1)
    end))

awful.screen.connect_for_each_screen(function(s)
    -- Each screen has its own tag table.
    awful.tag(tags.get_names(), s, tags.get_layouts())

    -- -- Create a promptbox for each screen
    -- s.mypromptbox = awful.widget.prompt()

    -- Create an imagebox widget which will contain an icon indicating which layout we're using.
    -- We need one layoutbox per screen.
    s.mylayoutbox = awful.widget.layoutbox(s)
    s.mylayoutbox:buttons(gears.table.join(
        awful.button({}, 1, function() awful.layout.inc(1) end),
        awful.button({}, 3, function() awful.layout.inc(-1) end),
        awful.button({}, 4, function() awful.layout.inc(1) end),
        awful.button({}, 5, function() awful.layout.inc(-1) end)))

    -- Create a taglist widget
    s.mytaglist = awful.widget.taglist {
        screen  = s,
        filter  = awful.widget.taglist.filter.all,
        buttons = taglist_buttons
    }

    -- Create a tasklist widget
    s.mytasklist = awful.widget.tasklist {
        screen  = s,
        filter  = awful.widget.tasklist.filter.currenttags,
        buttons = tasklist_buttons
    }

    -- Create the wibox
    s.mywibox = awful.wibar({ position = "top", screen = s })

    -- Add widgets to the wibox
    s.mywibox:setup {
        layout = wibox.layout.align.horizontal,
        { -- Left widgets
            layout = wibox.layout.fixed.horizontal,
            --mylauncher,
            s.mytaglist,
            --s.mypromptbox,
        },
        s.mytasklist, -- Middle widget
        {             -- Right widgets
            layout = wibox.layout.fixed.horizontal,
            net_widgets.wireless { interface = "wlo1" },
            net_widgets.indicator {
                interfaces = { "eno2" },
            },
            volume_widget(),
            battery_widget(),
            mykeyboardlayout,
            wibox.widget.systray {
                base_size = 200,
            },
            mytextclock,
            s.mylayoutbox,
            logout_menu_widget {
                font = "FiraCode Nerd Font 10",
                onlock = function() lock_screen() end
            },
        },
    }
end)
-- }}}

-- {{{ Mouse bindings
root.buttons(gears.table.join(
    awful.button({}, 3, function() mymainmenu:toggle() end),
    awful.button({}, 4, awful.tag.viewnext),
    awful.button({}, 5, awful.tag.viewprev)
))
-- }}}

-- {{{ Language management

local current_layout = "us"
local function change_lang(new_lang)
    if new_lang == "us" then
        awful.spawn.with_shell("setxkbmap -layout us")
        current_layout = "us"
    elseif new_lang == "ru" then
        awful.spawn.with_shell("setxkbmap -layout ru,us")
        current_layout = "ru"
    elseif new_lang == "sk" then
        awful.spawn.with_shell("setxkbmap -layout sk,us -variant qwerty")
        current_layout = "sk"
    end
end

-- }}}

-- {{{ Key bindings
local globalkeys = gears.table.join(
    awful.key({ modkey, }, "#31", hotkeys_popup.show_help,
        { description = "show help", group = "awesome" }),
    awful.key({ modkey, }, "Left", awful.tag.viewprev,
        { description = "view previous", group = "tag" }),
    awful.key({ modkey, }, "Right", awful.tag.viewnext,
        { description = "view next", group = "tag" }),
    awful.key({ modkey, }, "Escape", awful.tag.history.restore,
        { description = "go back", group = "tag" }),

    awful.key({ modkey, }, "j",
        function()
            awful.client.focus.byidx(1)
        end,
        { description = "focus next by index", group = "client" }
    ),
    awful.key({ modkey, }, "k",
        function()
            awful.client.focus.byidx(-1)
        end,
        { description = "focus previous by index", group = "client" }
    ),
    -- Keep this section commented, I don't need menu!
    -- awful.key({ modkey, }, "w", function() mymainmenu:show() end,
    --     { description = "show main menu", group = "awesome" }),

    -- Layout manipulation
    awful.key({ modkey, "Shift" }, "j", function() awful.client.swap.byidx(1) end,
        { description = "swap with next client by index", group = "client" }),
    awful.key({ modkey, "Shift" }, "k", function() awful.client.swap.byidx(-1) end,
        { description = "swap with previous client by index", group = "client" }),
    awful.key({ modkey, "Control" }, "j", function() awful.screen.focus_relative(1) end,
        { description = "focus the next screen", group = "screen" }),
    awful.key({ modkey, "Control" }, "k", function() awful.screen.focus_relative(-1) end,
        { description = "focus the previous screen", group = "screen" }),
    awful.key({ modkey, }, "u", awful.client.urgent.jumpto,
        { description = "jump to urgent client", group = "client" }),
    awful.key({ modkey, }, "Tab",
        function()
            awful.client.focus.history.previous()
            if client.focus then
                client.focus:raise()
            end
        end,
        { description = "go back", group = "client" }),

    -- Standard program
    awful.key({ modkey, }, "Return", function()
            awful.spawn(terminal, {
                maximized  = false,
                fullscreen = false,
            })
        end,
        { description = "open a terminal", group = "launcher" }),
    awful.key({ modkey, "Control" }, "r", awesome.restart,
        { description = "reload awesome", group = "awesome" }),
    awful.key({ modkey, }, "l", function() awful.tag.incmwfact(0.05) end,
        { description = "increase master width factor", group = "layout" }),
    awful.key({ modkey, }, "h", function() awful.tag.incmwfact(-0.05) end,
        { description = "decrease master width factor", group = "layout" }),
    awful.key({ modkey, "Shift" }, "h", function() awful.tag.incnmaster(1, nil, true) end,
        { description = "increase the number of master clients", group = "layout" }),
    awful.key({ modkey, "Shift" }, "l", function() awful.tag.incnmaster(-1, nil, true) end,
        { description = "decrease the number of master clients", group = "layout" }),
    awful.key({ modkey, "Control" }, "h", function() awful.tag.incncol(1, nil, true) end,
        { description = "increase the number of columns", group = "layout" }),
    awful.key({ modkey, "Control" }, "l", function() awful.tag.incncol(-1, nil, true) end,
        { description = "decrease the number of columns", group = "layout" }),
    awful.key({ modkey, }, "space", function() awful.layout.inc(1) end,
        { description = "select next", group = "layout" }),
    awful.key({ modkey, "Shift" }, "space", function() awful.layout.inc(-1) end,
        { description = "select previous", group = "layout" }),

    awful.key({ modkey, "Control" }, "n",
        function()
            local c = awful.client.restore()
            -- Focus restored client
            if c then
                c:emit_signal(
                    "request::activate", "key.unminimize", { raise = true }
                )
            end
        end,
        { description = "restore minimized", group = "client" }),

    -- Prompt
    awful.key({ modkey }, "r", function() awful.spawn.with_shell("~/.config/rofi/launchers/type-4/launcher.sh") end,
        { description = "run prompt", group = "launcher" }),

    -- Menubar
    awful.key({ modkey }, "p", function() menubar.show() end,
        { description = "show the menubar", group = "launcher" }),

    awful.key({ modkey }, "t", function()
            naughty.notify({
                title = "Oops, an error happened!",
                text = "This is a test error message",
                timeout = 3
            })
        end,
        { description = "test notifications", group = "test" }),

    -- Language layout
    awful.key({ modkey, "Shift" }, "#52", function()
            change_lang("us")
        end,
        { description = "set english keyboard layout", group = "language" }),
    awful.key({ modkey, "Shift" }, "#53", function()
            change_lang("ru")
        end,
        { description = "set russian keyboard layout", group = "language" }),
    awful.key({ modkey, "Shift" }, "#54", function()
            change_lang("sk")
        end,
        { description = "set slovak keyboard layout", group = "language" }),

    -- Toggle ru-us
    awful.key({ modkey }, "#52", function()
            if current_layout == "us" then
                change_lang("ru")
            else
                change_lang("us")
            end
        end,
        { description = "switch between russian and english", group = "language" }),

    -- Toggle ru-sk
    awful.key({ modkey }, "#53", function()
            if current_layout == "sk" then
                change_lang("ru")
            else
                change_lang("sk")
            end
        end,
        { description = "switch between russian and slovak", group = "language" }),

    -- Toggle Alt-Shift, Shift-Alt
    awful.key({ "Mod1" }, "Shift_L", function()
            if current_layout == "us" then
                change_lang("ru")
            else
                change_lang("us")
            end
        end,
        { description = "switch between russian and english", group = "language" }),
    awful.key({ "Shift" }, "Alt_L", function()
            if current_layout == "us" then
                change_lang("ru")
            else
                change_lang("us")
            end
        end,
        { description = "switch between russian and english", group = "language" }),
    awful.key({}, "XF86AudioRaiseVolume", function() volume_widget:inc(5) end),
    awful.key({}, "XF86AudioLowerVolume", function() volume_widget:dec(5) end),
    awful.key({}, "XF86AudioMute", function() volume_widget:toggle() end),
    awful.key({}, "XF86MonBrightnessDown", function()
        awful.util.spawn("xbacklight -dec 15")
    end),
    awful.key({}, "XF86MonBrightnessUp", function()
        awful.util.spawn("xbacklight -inc 15")
    end),
    awful.key({ modkey }, "#19", function()
            awful.spawn.with_shell(
            "maim --select --hidecursor --bordersize 2 --color=0.9,0.7,0.3,0.9 --padding 5 --capturebackground | xclip -selection clipboard -t image/png")
        end,
        { description = "make a screenshot", group = "launcher" })
)

local clientkeys = gears.table.join(
    awful.key({ modkey }, "f",
        function(c)
            c.fullscreen = not c.fullscreen
            c:raise()
        end,
        { description = "toggle fullscreen", group = "client" }),
    awful.key({ modkey }, "#54", function(c) c:kill() end,
        { description = "close", group = "client" }),
    awful.key({ modkey, "Control" }, "space", awful.client.floating.toggle,
        { description = "toggle floating", group = "client" }),
    awful.key({ modkey, "Control" }, "Return", function(c) c:swap(awful.client.getmaster()) end,
        { description = "move to master", group = "client" }),
    awful.key({ modkey, }, "o", function(c) c:move_to_screen() end,
        { description = "move to screen", group = "client" }),
    awful.key({ modkey, }, "t", function(c) c.ontop = not c.ontop end,
        { description = "toggle keep on top", group = "client" }),
    awful.key({ modkey, }, "n",
        function(c)
            -- The client currently has the input focus, so it cannot be
            -- minimized, since minimized clients can't have the focus.
            c.minimized = true
        end,
        { description = "minimize", group = "client" }),
    awful.key({ modkey, }, "m",
        function(c)
            c.maximized = not c.maximized
            c:raise()
        end,
        { description = "(un)maximize", group = "client" }),
    awful.key({ modkey, "Control" }, "m",
        function(c)
            c.maximized_vertical = not c.maximized_vertical
            c:raise()
        end,
        { description = "(un)maximize vertically", group = "client" }),
    awful.key({ modkey, "Shift" }, "m",
        function(c)
            c.maximized_horizontal = not c.maximized_horizontal
            c:raise()
        end,
        { description = "(un)maximize horizontally", group = "client" })
)

-- Tag click behaviour, keymaps
for i, tag in ipairs(tags) do
    globalkeys = gears.table.join(globalkeys,
        -- View tag only.
        awful.key({ modkey }, tag.key,
            function()
                local screen = awful.screen.focused()
                local tag_object = screen.tags[i]
                if tag_object then
                    tag_object:view_only()
                end
            end,
            { description = "view only tag " .. tag.name, group = "tag" }
        ),
        -- Toggle tag display.
        awful.key({ modkey, "Control" }, tag.key,
            function()
                local screen = awful.screen.focused()
                local tag_object = screen.tags[i]
                if tag_object then
                    awful.tag.viewtoggle(tag_object)
                end
            end,
            { description = "toggle tag " .. tag.name, group = "tag" }
        ),
        -- Move client to tag.
        awful.key({ modkey, "Shift" }, tag.key,
            function()
                if client.focus then
                    local tag_object = client.focus.screen.tags[i]
                    if tag_object then
                        client.focus:move_to_tag(tag_object)
                    end
                end
            end,
            { description = "move focused client to tag " .. tag.name, group = "tag" }
        ),
        -- Toggle tag on focused client.
        awful.key({ modkey, "Control", "Shift" }, tag.key,
            function()
                if client.focus then
                    local tag_object = client.focus.screen.tags[i]
                    if tag_object then
                        client.focus:toggle_tag(tag_object)
                    end
                end
            end,
            { description = "toggle focused client on tag " .. tag.name, group = "tag" }
        )
    )
end

local clientbuttons = gears.table.join(
    awful.button({}, 1, function(c)
        c:emit_signal("request::activate", "mouse_click", { raise = true })
    end),
    awful.button({ modkey }, 1, function(c)
        c:emit_signal("request::activate", "mouse_click", { raise = true })
        awful.mouse.client.move(c)
    end),
    awful.button({ modkey }, 3, function(c)
        c:emit_signal("request::activate", "mouse_click", { raise = true })
        awful.mouse.client.resize(c)
    end)
)

-- Set keys
root.keys(globalkeys)
-- }}}

-- {{{ Rules
-- Rules to apply to new clients (through the "manage" signal).
awful.rules.rules = {
    -- All clients will match this rule.
    {
        rule = {},
        properties = {
            border_width = beautiful.border_width,
            border_color = beautiful.border_normal,
            focus = awful.client.focus.filter,
            raise = true,
            keys = clientkeys,
            buttons = clientbuttons,
            screen = awful.screen.preferred,
            placement = awful.placement.no_overlap + awful.placement.no_offscreen
        }
    },

    -- Floating clients.
    {
        rule_any = {
            instance = {
                "DTA",   -- Firefox addon DownThemAll.
                "copyq", -- Includes session name in class.
                "pinentry",
            },
            class = {
                "Arandr",
                "Blueman-manager",
                "Gpick",
                "Kruler",
                "MessageWin",  -- kalarm.
                "Sxiv",
                "Tor Browser", -- Needs a fixed window size to avoid fingerprinting by screen size.
                "Wpa_gui",
                "veromix",
                "xtightvncviewer" },

            -- Note that the name property shown in xprop might be set slightly after creation of the client
            -- and the name shown there might not match defined rules here.
            name = {
                "Event Tester", -- xev.
            },
            role = {
                "AlarmWindow",   -- Thunderbird's calendar.
                "ConfigManager", -- Thunderbird's about:config.
                "pop-up",        -- e.g. Google Chrome's (detached) Developer Tools.
            }
        },
        properties = { floating = true }
    },

    -- Add titlebars to normal clients and dialogs
    -- {
    --     rule_any = { type = { "dialog" }
    --     },
    --     properties = { titlebars_enabled = true }
    -- },

    -- Set Firefox to always map on the tag named "2" on screen 1.
    {
        rule = { class = "firefox" },
        properties = {
            tag = tags[2].icon,
            screen = awful.screen.preferred,
            border_width = 0,
        }
    },

    {
        rule = { class = "steam" },
        properties = {
            tag = tags[9].icon,
            screen = awful.screen.preferred,
        }
    },

    {
        rule = { class = "KeePassXC" },
        properties = {
            tag = tags[4].icon,
            screen = awful.screen.preferred,
        }
    },

    {
        rule = { class = "discord" },
        properties = {
            tag = tags[6].icon,
            screen = awful.screen.preferred,
        }
    },
}
-- }}}

-- {{{ Signals
-- Signal function to execute when a new client appears.
client.connect_signal("manage", function(c, context)
    -- Set the windows at the slave,
    -- i.e. put it at the end of others instead of setting it master.
    -- if not awesome.startup then awful.client.setslave(c) end

    if awesome.startup
        and not c.size_hints.user_position
        and not c.size_hints.program_position then
        -- Prevent clients from being unreachable after screen count changes.
        awful.placement.no_offscreen(c)
    end

    if c.floating and context == "new" then
        c.placement = awful.placement.no_offscreen + awful.placement.no_overlap + awful.placement.centered
    end
end)

-- Add a titlebar if titlebars_enabled is set to true in the rules.
client.connect_signal("request::titlebars", function(c)
    -- buttons for the titlebar
    local buttons = gears.table.join(
        awful.button({}, 1, function()
            c:emit_signal("request::activate", "titlebar", { raise = true })
            awful.mouse.client.move(c)
        end),
        awful.button({}, 3, function()
            c:emit_signal("request::activate", "titlebar", { raise = true })
            awful.mouse.client.resize(c)
        end)
    )

    awful.titlebar(c):setup {
        { -- Left
            awful.titlebar.widget.iconwidget(c),
            buttons = buttons,
            layout  = wibox.layout.fixed.horizontal
        },
        {     -- Middle
            { -- Title
                align  = "center",
                widget = awful.titlebar.widget.titlewidget(c)
            },
            buttons = buttons,
            layout  = wibox.layout.flex.horizontal
        },
        { -- Right
            awful.titlebar.widget.floatingbutton(c),
            awful.titlebar.widget.maximizedbutton(c),
            awful.titlebar.widget.stickybutton(c),
            awful.titlebar.widget.ontopbutton(c),
            awful.titlebar.widget.closebutton(c),
            layout = wibox.layout.fixed.horizontal()
        },
        layout = wibox.layout.align.horizontal
    }
end)

client.connect_signal("focus", function(c) c.border_color = beautiful.border_focus end)
client.connect_signal("unfocus", function(c) c.border_color = beautiful.border_normal end)
-- }}}

-- {{{ Autostart applications
awful.spawn.with_shell("nitrogen --restore")
awful.spawn.with_shell("light-locker")
awful.spawn.with_shell("picom")
awful.spawn.with_shell("solaar --window=hide")

awful.spawn.with_shell("keepassxc")
awful.spawn.with_shell(terminal)
-- }}}

-- vim: ft=lua:fdm=marker
