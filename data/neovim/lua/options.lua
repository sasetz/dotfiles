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
vim.cmd 'colorscheme catppuccin-frappe'

-- set completeopt to have a better completion experience
vim.o.completeopt = 'menuone,noselect'

-- set amount of undos held in memory
vim.o.undolevels = 5000

-- always show tabline
vim.o.showtabline = 2

if vim.g.neovide then
  vim.g.neovide_scale_factor = 0.7
end

-- vim: ts=2 sts=2 sw=2 et
