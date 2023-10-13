-- set <space> as the leader key
-- NOTE: Must happen before plugins are required (otherwise wrong leader will be used)
vim.g.mapleader = ' '
vim.g.maplocalleader = ' '

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

vim.o.termguicolors = true

require('lazy').setup({
  -- lsp configuration
  {
    'neovim/nvim-lspconfig',
    dependencies = {
      -- lsp manager
      'williamboman/mason.nvim',
      'williamboman/mason-lspconfig.nvim',

      -- spinner and status for lsp
      {
        'j-hui/fidget.nvim',
        tag = 'legacy',
        event = 'LspAttach',
      },

      -- additional lua configuration and docs
      'folke/neodev.nvim',
    },
  },

  -- enables autocompletion
  {
    'hrsh7th/nvim-cmp',
    dependencies = {
      'hrsh7th/cmp-nvim-lsp',
      'hrsh7th/cmp-nvim-lsp-signature-help',
      'hrsh7th/cmp-vsnip',
      'hrsh7th/vim-vsnip',
      'rafamadriz/friendly-snippets',
      'onsails/lspkind.nvim',
    },
  },

  -- highlighting, navigation, syntax overall
  {
    'nvim-treesitter/nvim-treesitter',
    build = function()
      pcall(require('nvim-treesitter.install').update { with_sync = true })
    end,
    version = nil,
  },

  -- showing context
  {
    'nvim-treesitter/nvim-treesitter-context',
    dependencies = {
      'nvim-treesitter/nvim-treesitter-context',
    },
  },

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
  'lewis6991/gitsigns.nvim',

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
  'nvim-lualine/lualine.nvim',

  -- indent even on blank lines
  {
    'lukas-reineke/indent-blankline.nvim',
    main = 'ibl',
  },
  -- autodetect tab width
  'tpope/vim-sleuth',

  -- file browser
  {
    'nvim-tree/nvim-tree.lua',
    dependencies = {
      'nvim-tree/nvim-web-devicons', -- optional, for file icons
    },
  },

  -- Fuzzy Finder (files, lsp, etc)
  {
    'nvim-telescope/telescope.nvim',
    branch = '0.1.x',
    dependencies = {
      'nvim-lua/plenary.nvim'
    }
  },

  -- Fuzzy Finder Algorithm which requires local dependencies to be built. Only load if `make` is available
  { 'nvim-telescope/telescope-fzf-native.nvim', build = 'make', cond = vim.fn.executable 'make' == 1 },

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
    config = function()
      require('todo-comments').setup {
      }
    end
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
  {
    'sudormrfbin/cheatsheet.nvim',

    dependencies = {
      { 'nvim-telescope/telescope.nvim' },
      { 'nvim-lua/popup.nvim' },
      { 'nvim-lua/plenary.nvim' },
    }
  },

  -- add color tint to bg of the hex colors for CSS
  {
    'norcalli/nvim-colorizer.lua',
    config = function() require("colorizer").setup(nil, { css = true }) end,
  },

  -- reformat lines so that they align by some char
  { 'godlygeek/tabular' },

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
  {
    'stevearc/aerial.nvim',
  },

  -- a lot of helpful plugins in one, see plugins/mini.lua
  {
    'echasnovski/mini.nvim',
    version = false,
    dependencies = {
      'nvim-tree/nvim-web-devicons',
    },
  },

  -- highlight word under cursor using lsp or treesitter
  {
    'RRethy/vim-illuminate',
  },

  -- tabline
  {
    'romgrk/barbar.nvim',
    dependencies = {
      'lewis6991/gitsigns.nvim',
      'nvim-tree/nvim-web-devicons',
    },
    init = function() vim.g.barbar_auto_setup = false end,
    opts = {
      animation = false,
    },
    version = '^1.0.0',
  },

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
  {
    "folke/noice.nvim",
    event = "VeryLazy",
    opts = {
      lsp = {
        -- (copied from github page without concerns)
        override = {
          ["vim.lsp.util.convert_input_to_markdown_lines"] = true,
          ["vim.lsp.util.stylize_markdown"] = true,
          ["cmp.entry.get_documentation"] = false,
        },
        progress = {
          enabled = false, -- there's already fidget.nvim for that
        },
      },
      presets = {
        bottom_search = true,         -- use a classic bottom cmdline for search
        command_palette = true,       -- position the cmdline and popupmenu together
        long_message_to_split = true, -- long messages will be sent to a split
        inc_rename = false,           -- enables an input dialog for inc-rename.nvim
        lsp_doc_border = true,        -- add a border to hover docs and signature help
      },
    },
    dependencies = {
      -- if you lazy-load any plugin below, make sure to add proper `module="..."` entries
      'MunifTanjim/nui.nvim',

      -- replaces ui choice with telescope modal
      {
        'stevearc/dressing.nvim',
        opts = {},
      },
      -- places notifications to the top right corner
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
      }
    }
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
  }
})

-- load the configurations
require('plugins.plugins')
