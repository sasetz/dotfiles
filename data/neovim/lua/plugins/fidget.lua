-- Turn on lsp status information
return {
  'j-hui/fidget.nvim',
  tag = 'legacy',
  event = 'LspAttach',
  opts = {
    text = {
      -- spinner = {"▙", "▟", "▜", "▛"},
      spinner = 'dots',
      done = ''
    },
    timer = {
      spinner_rate = 125
    },
    window = {
      blend = 0,
    }
  },
}
