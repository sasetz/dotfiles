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
      },

      -- additional lua configuration and docs
      'folke/neodev.nvim',
    },
  },

  -- autocompletion
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

  -- Catpuccin theme
  { 'catppuccin/nvim', name = 'catppuccin' },

  -- status line
  'nvim-lualine/lualine.nvim',

  -- indent even on blank lines
  'lukas-reineke/indent-blankline.nvim',
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
  { 'nvim-telescope/telescope.nvim', branch = '0.1.x', dependencies = { 'nvim-lua/plenary.nvim' } },

  -- Fuzzy Finder Algorithm which requires local dependencies to be built. Only load if `make` is available
  { 'nvim-telescope/telescope-fzf-native.nvim', build = 'make', cond = vim.fn.executable 'make' == 1 },

  -- welcome screen on startup
  -- TODO: make so that the open directory behaves as normal
  -- TODO: make so that it works with autosession
  {
    'glepnir/dashboard-nvim',
    event = 'VimEnter',
    config = function()
      require('dashboard').setup {
        -- config
      }
    end,
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

  {
    'ibhagwan/fzf-lua',
    event = 'VeryLazy',
    dependencies = { 'nvim-tree/nvim-web-devicons' },
    config = function()
      require('fzf-lua').setup({'telescope'})
    end
  },

  -- add sessions, restores layout for each project
  {
      'olimorris/persisted.nvim',
      config = true
  },

  -- work with projects rather than folders
  {
    'Abstract-IDE/penvim',
  },

  -- plugin for displaying layout
  {
    'stevearc/aerial.nvim',
  },

  {
    'ThePrimeagen/harpoon',
    dependencies = {
      'nvim-lua/plenary.nvim',
    },
  },

  -- a lot of helpful plugins in one
  {
    'echasnovski/mini.nvim',
    version = false,
    dependencies = {
      'nvim-tree/nvim-web-devicons',
    },
  },

  -- highlight word under cursor
  {
    'RRethy/vim-illuminate',
  },

  -- rust additions
  {
    'simrat39/rust-tools.nvim',
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

  -- LSP for C/C++
  {
    'ranjithshegde/ccls.nvim',
  },
})

-- load the configurations
require('plugins.plugins')
