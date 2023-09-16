require('penvim').setup({
  rooter = {
    enable = true, -- enable/disable rooter
    patterns = {'.__nvim__.lua', '.git', 'node_modules', 'mk'}
  },
  indentor = {
    enable = false, -- enable/disable indentor
    indent_length = 4, -- tab indent width
    accuracy = 5, -- positive integer. higher the number, the more accurate result (but affects the startup time)
    disable_types = {
      'help','dashboard','dashpreview','NvimTree','vista','sagahover', 'terminal',
    },
  },
  project_env = {
    enable = true, -- enable/disable project_env
    config_name = '.__nvim__.lua' -- config file name
  },
})
