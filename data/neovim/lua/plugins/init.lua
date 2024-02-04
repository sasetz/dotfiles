-- {{{ Leader

-- set <space> as the leader key
vim.g.mapleader = ' '
vim.g.maplocalleader = ' '

-- }}}

-- {{{ Lazy init

local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable", -- latest stable release
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

-- }}}

vim.o.termguicolors = true

require('lazy').setup {
  -- lsp configuration
  require('plugins.lspconfig'),
  require('plugins.mason'),
  require('plugins.mason-lspconfig'),
  require('plugins.neodev'),
  -- lsp progress status in the corner
  require('plugins.fidget'),

  -- enables autocompletion
  require('plugins.nvim_cmp'),

  -- highlighting, navigation, syntax overall
  require('plugins.treesitter'),

  -- showing context
  require('plugins.treesitter-context'),

  -- additional text objects for treesitter
  {
    'nvim-treesitter/nvim-treesitter-textobjects',
    dependencies = 'nvim-treesitter',
  },

  -- git command inside neovim
  'tpope/vim-fugitive',
  -- github command to browse it
  'tpope/vim-rhubarb',
  -- inspect git data (blame, add, etc.) per line
  require('plugins.gitsigns'),

  -- Onedark theme
  {
    'navarasu/onedark.nvim',
    opts = {
      style = 'warmer',
      term_colors = true,
      highlights = {
        IlluminatedWordText = { bg = '#2f313d' },
        IlluminatedWordRead = { bg = '#2f313d' },
        IlluminatedWordWrite = { bg = '#2f313d' },
        NotifyBackground = { bg = '#232323' },
      },
      transparent = true,
    }
  },

  -- status line
  require('plugins.lualine'),

  -- indent even on blank lines
  {
    'lukas-reineke/indent-blankline.nvim',
    main = 'ibl',
    opts = {
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
  },
  -- autodetect tab width
  'tpope/vim-sleuth',

  -- file browser
  require('plugins.nvim_tree'),

  -- Fuzzy Finder (files, lsp, etc)
  {
    'nvim-telescope/telescope.nvim',
    branch = '0.1.x',
    dependencies = {
      'nvim-lua/plenary.nvim'
    }
  },

  -- Fuzzy Finder Algorithm which requires local dependencies to be built. Only load if `make` is available
  require('plugins.telescope'),

  -- welcome screen on startup
  {
    'glepnir/dashboard-nvim',
    event = 'VimEnter',
    opts = {
    },
    dependencies = { 'nvim-tree/nvim-web-devicons' }
  },

  -- list of errors and lsp messages, as well as todos
  {
    'folke/trouble.nvim',
    dependencies = 'nvim-tree/nvim-web-devicons',
    config = function()
      require('trouble').setup {
        position = 'right',
        width = 45,
        action_keys = {
          close = { 'q', '<esc>' }
        }
      }
    end
  },

  -- add todos and such special comments to the diagnostics list on the right
  {
    'folke/todo-comments.nvim',
    dependencies = 'nvim-lua/plenary.nvim',
    opts = {
    },
  },

  -- key mappings hints, press leader (space) and wait for a second to show
  {
    'folke/which-key.nvim',
    config = function()
      vim.o.timeout = true
      vim.o.timeoutlen = 300
      require('which-key').setup {
      }
    end
  },

  -- cheatsheet to make notes about new features I add
  require('plugins.cheatsheet'),

  -- add color tint to bg of the hex colors for CSS
  {
    'norcalli/nvim-colorizer.lua',
    config = function() require("colorizer").setup(nil, { css = true }) end,
  },

  -- fuzzy finding, used in telescope plugin picker
  {
    'ibhagwan/fzf-lua',
    event = 'VeryLazy',
    dependencies = { 'nvim-tree/nvim-web-devicons' },
    config = function()
      require('fzf-lua').setup({ 'telescope' })
    end
  },

  -- plugin for displaying overview of the current file (functions, etc.)
  require('plugins.aerial'),

  -- a lot of helpful plugins in one, see plugins/mini.lua
  require('plugins.mini'),

  -- highlight word under cursor using lsp or treesitter
  require('plugins.illuminate'),

  -- tabline
  require('plugins.tabby'),

  -- places the closing brackets when you type the opening one
  {
    'windwp/nvim-autopairs',
    event = "InsertEnter",
    opts = {
      check_ts = true,
    }
  },

  -- adds very nice ui changes, such as cmd, ui choice, etc.
  -- also adds search cursor, when it is activated with total search hits
  require('plugins.noice'),

  -- nice notifications at the top right corner
  {
    'rcarriga/nvim-notify',
    opts = {
      fps = 60,
      icons = {
        DEBUG = "",
        ERROR = "",
        TRACE = "",
        INFO = "",
        WARN = ""
      },
      render = "compact",
      stages = "fade",
    },
  },
  -- replaces ui choice with telescope modal
  {
    'stevearc/dressing.nvim',
    opts = {},
  },

  -- adds simple session management, using vim's builtin sessions
  {
    'Shatur/neovim-session-manager',
    opts = {
      autoload_mode = 'Disabled',
      autosave_ignore_dirs = {
        '~'
      },
      autosave_only_in_session = true,
    },
  },

  -- toggleable terminal inside Neovim
  {
    'akinsho/toggleterm.nvim',
    version = "v2.8.0",
    opts = {
    }
  },

  -- icon picker for unicode and nerd fonts
  {
    'ziontee113/icon-picker.nvim',
    opts = {
      disable_legacy_commands = true,
    }
  }
}
