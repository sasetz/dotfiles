-- TODO: add option to put the arguments of a call to separate lines

-- {{{ Basics

-- Keymaps for better default experience
-- See `:help vim.keymap.set()`
vim.keymap.set({ 'n', 'v' }, '<Space>', '<Nop>', { silent = true })

-- Remap for dealing with word wrap
vim.keymap.set('n', 'k', "v:count == 0 ? 'gk' : 'k'", { expr = true, silent = true })
vim.keymap.set('n', 'j', "v:count == 0 ? 'gj' : 'j'", { expr = true, silent = true })

-- }}}

-- {{{ Search

vim.keymap.set('n', '<leader>s<cr>', require('telescope.builtin').resume, { desc = 'Continue last search', silent = true, noremap = true })
vim.keymap.set('n', '<leader><space>', require('telescope.builtin').buffers, { desc = 'Find existing buffers', silent = true, noremap = true })

vim.keymap.set('n', '<leader>sf', require('telescope.builtin').find_files, { desc = 'Search files', silent = true, noremap = true })
vim.keymap.set('n', '<leader>so', require('telescope.builtin').oldfiles, { desc = 'Search old files', silent = true, noremap = true })
vim.keymap.set('n', '<leader>sw', require('telescope.builtin').grep_string, { desc = 'Search current Word', silent = true, noremap = true })
vim.keymap.set('n', '<leader>sg', require('telescope.builtin').live_grep, { desc = 'Search by grep', silent = true, noremap = true })
vim.keymap.set('n', '<leader>sb', require('telescope.builtin').buffers, { desc = 'Search open buffers', silent = true, noremap = true })

vim.keymap.set('n', '<leader>sh', require('telescope.builtin').help_tags, { desc = 'Search help', silent = true, noremap = true })
vim.keymap.set('n', '<leader>sp', require('telescope.builtin').builtin, { desc = 'Search pickers', silent = true, noremap = true })
vim.keymap.set('n', '<leader>st', ':TodoTelescope<cr>', { desc = 'Search todo', silent = true, noremap = true })
vim.keymap.set('n', '<leader>sk', ':Telescope keymaps<cr>', { desc = 'Search keymaps', silent = true, noremap = true })

vim.keymap.set('n', '<leader>sd', require('telescope.builtin').diagnostics, { desc = 'Search diagnostics', silent = true, noremap = true })
vim.keymap.set('n', '<leader>s/', function()
  -- You can pass additional configuration to telescope to change theme, layout, etc.
  require('telescope.builtin').current_buffer_fuzzy_find(require('telescope.themes').get_dropdown {
    previewer = false,
  })
end, { desc = 'Search fuzzily in the current buffer', silent = true, noremap = true })

vim.keymap.set("n", "<leader>sqa", ":IconPickerNormal nerd_font emoji symbols<cr>", { desc = 'Search symbols', silent = true, noremap = true })
vim.keymap.set("n", "<leader>sqA", ":IconPickerNormal<cr>", { desc = 'Search alt fonts/emoji/html colors/nerd fonts/symbols but yank into a register', silent = true, noremap = true })

vim.keymap.set("n", "<leader>sqe", ":IconPickerNormal emoji<cr>", { desc = 'Search emoji', silent = true, noremap = true })
vim.keymap.set("n", "<leader>sqf", ":IconPickerNormal alt_fonts<cr>", { desc = 'Search alt fonts', silent = true, noremap = true })
vim.keymap.set("n", "<leader>sqn", ":IconPickerNormal nerd_font<cr>", { desc = 'Search nerd fonts', silent = true, noremap = true })

-- }}}

-- {{{ LSP

vim.keymap.set('n', '[d', vim.diagnostic.goto_prev, { desc = 'Diagnostics backward' })
vim.keymap.set('n', ']d', vim.diagnostic.goto_next, { desc = 'Diagnostics forward' })
vim.keymap.set('n', '<leader>le', vim.diagnostic.open_float, { desc = 'LSP: Open diagnostics' })
vim.keymap.set('n', '<leader>lq', vim.diagnostic.setloclist, { desc = 'LSP: Diagnostics to location list' })
vim.keymap.set('n', '<leader>lf', ':Format<cr>', { desc = 'LSP: Format current file', silent = true })
vim.keymap.set('n', '[g', ":Gitsigns prev_hunk<cr>", { desc = 'Git hunk backward', silent = true })
vim.keymap.set('n', ']g', ":Gitsigns next_hunk<cr>", { desc = 'Git hunk forward', silent = true })

-- }}}

--{{{ Open

local miniFiles = require('mini.files')
local miniMap = require('mini.map')

vim.keymap.set('n', '<leader>oc', ':Cheatsheet<cr>', { desc = 'Open cheatsheet', silent = true, noremap = true })
vim.keymap.set('n', '<leader>of', miniFiles.open,
  { desc = 'Open file manager', silent = true, noremap = true })
vim.keymap.set('n', '<leader>op', ':Lazy<cr>', { desc = 'Open package manager', silent = true, noremap = true })
vim.keymap.set('n', '<leader>om', ':Mason<cr>', { desc = 'Open languages manager', silent = true, noremap = true })
vim.keymap.set('n', '<leader>oo', miniMap.toggle, { desc = 'Open file map', silent = true, noremap = true })
vim.keymap.set('n', '<leader>ot', ':tabnew<cr>', { desc = 'Open new tab', silent = true, noremap = true })

--}}}

-- {{{ Projects

vim.keymap.set('n', '<leader>pl', ':SessionManager load_last_session<cr>',
  { desc = 'Last project', silent = true, noremap = true })

vim.keymap.set('n', '<leader>ps', ':SessionManager load_session<cr>',
  { desc = 'Search projects', silent = true, noremap = true })

vim.keymap.set('n', '<leader>pw', ':SessionManager save_current_session<cr>',
  { desc = 'Save/create opened project', silent = true, noremap = true })

vim.keymap.set('n', '<leader>pd', ':SessionManager delete_session<cr>',
  { desc = 'Delete a project', silent = true, noremap = true })

vim.keymap.set('n', '<leader>po', function()
    local get_fs_success, result = pcall(miniFiles.get_fs_entry)
    if not get_fs_success or not result then
      print("There is no file browser open")
      return
    end
    local string = require('string')
    local find_result = string.find(result.path, '/[^/]*$')
    if not find_result then
      print('Error detecting path')
      return
    end
    local current_path = string.sub(result.path, 1, find_result)
    local cd_success = pcall(vim.cmd, 'cd ' .. current_path)
    if cd_success then
      print('Changed cwd to ' .. current_path)
      miniFiles.close()
    else
      print("Couldn't change current directory")
    end
  end,
  { desc = 'Open current directory from file browser', silent = true, noremap = true })

-- }}}

-- {{{ Toggle

-- 't' prefix

-- }}}

-- {{{ Moving

vim.keymap.set('n', '<M-l>', 'gt',
  { desc = 'Next tab', silent = true, noremap = true })
vim.keymap.set('n', '<M-h>', 'gT',
  { desc = 'Previous tab', silent = true, noremap = true })
vim.keymap.set('n', '<C-h>', '<C-w>h',
  { desc = 'Left window', silent = true })
vim.keymap.set('n', '<C-l>', '<C-w>l',
  { desc = 'Right window', silent = true, noremap = true })
vim.keymap.set('n', '<C-j>', '<C-w>j',
  { desc = 'Bottom window', silent = true, noremap = true })
vim.keymap.set('n', '<C-k>', '<C-w>k',
  { desc = 'Top window', silent = true, noremap = true })
-- TODO: resizing using arrow keys

-- }}}

-- {{{ Hotkeys

-- close tab
vim.keymap.set('n', '<leader>c', ':BufferClose<cr>',
  { desc = 'Close current buffer', silent = true, noremap = true })

-- save file
vim.keymap.set('n', '<leader>w', ':w<cr>',
  { desc = 'Save', silent = true, noremap = true })

-- quit Neovim
vim.keymap.set('n', '<leader>q', ':qa<cr>',
  { desc = 'Quit', silent = true, noremap = true })

-- }}}

-- {{{ UI

vim.keymap.set('n', '<leader>dh', ':split<cr>',
  { desc = 'Horizontal split', silent = true, noremap = true })
vim.keymap.set('n', '<leader>dv', ':vsplit<cr>',
  { desc = 'Vertical split', silent = true, noremap = true })
vim.keymap.set('n', '<leader>dn', ':set relativenumber!<cr>',
  { desc = 'Toggle relative line number', silent = true, noremap = true })
vim.keymap.set('n', '<leader>dr', ':TabRename ',
  { desc = 'Rename current tab', noremap = true })

-- }}}

-- {{{ Panels

-- 1. open file broswer
vim.keymap.set('n', '<M-1>', ':NvimTreeToggle<cr>',
  { desc = 'Open file browser pane', silent = true, noremap = true })

-- 2. open diagnostics
vim.keymap.set('n', '<M-2>', ':TroubleToggle<cr>',
  { desc = 'Open diagnostics pane', silent = true, noremap = true })

-- 3. open layout pane
vim.keymap.set('n', '<M-3>', ':AerialToggle<cr>',
  { desc = 'Open layout pane', silent = true, noremap = true })

vim.keymap.set('n', '<C-e>', '3<C-e>',
  { desc = 'Move down', silent = true, noremap = true })
vim.keymap.set('n', '<C-y>', '3<C-y>',
  { desc = 'Move up', silent = true, noremap = true })

-- terminal mappings
vim.keymap.set('t', '<Esc>', '<C-\\><C-n>',
  {
    desc = 'Return to normal mode',
    silent = true,
    noremap = true
  }
)

local Terminal = require('toggleterm.terminal').Terminal
local shell    = Terminal:new({
  cmd = 'fish',
  direction = 'float',
})
local function toggle_terminal()
  shell:toggle()
end

vim.keymap.set({ 'n', 't' }, '<F7>', toggle_terminal,
  {
    desc = 'Toggle shell terminal',
    silent = true,
    noremap = true
  }
)

-- }}}

-- {{{ Git

-- NOTE: more keymaps on gitsigns.lua on_attach

vim.keymap.set('n', '<leader>gq', ':Git difftool<cr>',
  { desc = 'Fill quickfix with git diff', silent = true, noremap = true })

vim.keymap.set('n', '<leader>gt', ':Git status<cr>',
  { desc = 'Git status', silent = true, noremap = true })

vim.keymap.set('n', '<leader>ga', ':Git add .<cr>',
  { desc = 'Git add all', silent = true, noremap = true })

-- }}}

-- test
vim.keymap.set('n', '<leader>=', function()
    vim.ui.select({ 'build debug', 'build release', 'run', 'regression', 'review' }, {
      prompt = 'Choose the task:',
      format_item = function(item)
        return item -- TODO: make this into a tasks plugin
      end,
    }, function(choice)
    end)
  end,
  { desc = 'Open layout pane', silent = true, noremap = true })

-- vim: ts=2 sts=2 sw=2 et fdm=marker
