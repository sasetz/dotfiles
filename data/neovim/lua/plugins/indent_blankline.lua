-- Enable `lukas-reineke/indent-blankline.nvim`
-- See `:help indent_blankline.txt`
local ibl = require('ibl')
ibl.setup {
  -- browse unicode box drawing symbols for more
  indent = { char = '│' },
  whitespace = { highlight = { "Whitespace", "NonText" } },
  exclude = {
    filetypes = {
      'lspinfo',
      'packer',
      'checkhealth',
      'help',
      'man',
      '',
      'aerial',
      'dashboard',
    },
    buftypes = {
      'terminal',
      'prompt',
      'quickfix',
      'nofile',
    }
  },
}

