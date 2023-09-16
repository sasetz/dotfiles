require('illuminate').configure {
  providers = {
    'lsp',
    'treesitter',
    'regex',
  },
  delay = 50,
  filetypes_denylist = {
    'dirvish',
    'fugitive',
    'NvimTree',
    'Aerial',
  },
}

local bg = '#424557'
vim.cmd([[hi IlluminatedWordText gui=none guibg=]] .. bg)
vim.cmd([[hi IlluminatedWordRead gui=none guibg=]] .. bg)
vim.cmd([[hi IlluminatedWordWrite gui=none guibg=]] .. bg)

