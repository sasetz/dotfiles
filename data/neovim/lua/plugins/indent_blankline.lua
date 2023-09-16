-- Enable `lukas-reineke/indent-blankline.nvim`
-- See `:help indent_blankline.txt`
require('indent_blankline').setup {
  -- browse unicode box drawing symbols for more
  char = '│',
  show_trailing_blankline_indent = false,
}
vim.g.indent_blankline_filetype_exclude = {
  'lspinfo',
  'packer',
  'checkhealth',
  'help',
  'man',
  '',
  'aerial',
  'dashboard',
}

