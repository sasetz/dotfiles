-- [[ Setting options ]]
-- see `:help vim.o`

-- set highlight on search
vim.o.hlsearch = false

-- set nice tab width
vim.o.shiftwidth = 4
vim.o.tabstop = 4
vim.o.expandtab = true

-- add column for maximum recommended width of a line
vim.o.colorcolumn = "80"

-- make line numbers default
vim.wo.number = true
-- display relative numbers
vim.opt.relativenumber = true

-- enable current line highlighting
vim.opt.cursorline = true

-- keep 8 lines above and below curosr
vim.opt.scrolloff = 4

-- enable mouse mode
vim.o.mouse = 'a'

-- enable break indent
vim.o.breakindent = true

-- save undo history
vim.o.undofile = true

-- case insensitive searching UNLESS /C or capital in search
vim.o.ignorecase = true
vim.o.smartcase = true

-- decrease update time
vim.o.updatetime = 250
vim.wo.signcolumn = 'yes'

-- set colorscheme
vim.o.termguicolors = true
vim.cmd 'colorscheme onedark'

-- set completeopt to have a better completion experience
vim.o.completeopt = 'menuone,noselect'

-- set amount of undos held in memory
vim.o.undolevels = 5000

-- set maximum height of popup windows (auto-completion)
vim.o.pumheight = 16

-- always show tabline
vim.o.showtabline = 2

-- makes hidden buffers not be unloaded
vim.o.hidden = true

-- make folds form on triple curly braces
vim.opt.foldmethod = 'marker'

if vim.g.neovide then
  vim.o.guifont = "FiraCode Nerd Font:h10"
  vim.g.neovide_theme = 'onedark'
  vim.g.neovide_transparency = 0.8
  vim.g.neovide_scroll_animation_length = 0.3
  vim.g.neovide_refresh_rate = 144

end

-- vim: ts=2 sts=2 sw=2 et
