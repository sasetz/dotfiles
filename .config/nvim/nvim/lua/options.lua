-- [[ Setting options ]]
-- See `:help vim.o`

-- Set highlight on search
vim.o.hlsearch = false

-- Set nice tab width
vim.o.shiftwidth = 4
vim.o.tabstop = 4
vim.o.expandtab = true

-- Make line numbers default
vim.wo.number = true

-- Display relative numbers
vim.opt.relativenumber = true

-- Keep 8 lines above and below curosr
vim.opt.scrolloff = 8

-- Enable mouse mode
vim.o.mouse = 'a'

-- Enable break indent
vim.o.breakindent = true

-- Save undo history
vim.o.undofile = true

-- Case insensitive searching UNLESS /C or capital in search
vim.o.ignorecase = true
vim.o.smartcase = true

-- Decrease update time
vim.o.updatetime = 250
vim.wo.signcolumn = 'yes'

-- Set colorscheme
vim.o.termguicolors = true
vim.cmd [[colorscheme onedark]]

-- Set completeopt to have a better completion experience
vim.o.completeopt = 'menuone,noselect'

-- vim: ts=2 sts=2 sw=2 et
