
-- animate cursor and stuff
-- require('mini.animate').setup()
require('mini.bracketed').setup {
  buffer     = { suffix = 'b', options = {} },
  comment    = { suffix = 'c', options = {} },
  conflict   = { suffix = 'x', options = {} },
  diagnostic = { suffix = 'd', options = {} },
  file       = { suffix = 'f', options = {} },
  indent     = { suffix = 'i', options = {} },
  jump       = { suffix = 'j', options = {} },
  location   = { suffix = 'l', options = {} },
  oldfile    = { suffix = 'o', options = {} },
  quickfix   = { suffix = 'q', options = {} },
  treesitter = { suffix = 't', options = {} },
  undo       = { suffix = 'u', options = {} },
  window     = { suffix = 'w', options = {} },
  yank       = { suffix = 'y', options = {} },
}

-- comment toggle by `gc` or `gcc`
require('mini.comment').setup()

-- autocompletion
-- require('mini.completion').setup()

-- automatically add pair brackets
require('mini.pairs').setup()

-- file browser
require('mini.files').setup()

-- map of the file in top right corner
require('mini.map').setup()

