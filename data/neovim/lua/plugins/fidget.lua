-- Turn on lsp status information
require('fidget').setup{
  text = {
    -- spinner = {"▙", "▟", "▜", "▛"},
    spinner = 'dots',
    done = ''
  },
  timer = {
    spinner_rate = 125
  }
}

