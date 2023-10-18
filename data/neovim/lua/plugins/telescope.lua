return {
  'nvim-telescope/telescope-fzf-native.nvim',
  build = 'make',
  cond = vim.fn.executable 'make' == 1,
  config = function()
    local actions = require('telescope.actions')
    require('telescope').setup {
      defaults = {
        mappings = {
          i = {
            ['<C-u>'] = false,
            ['<C-d>'] = actions.delete_buffer,
            ['<C-q>'] = actions.close,
            ['<esc>'] = actions.close,
            ['<C-j>'] = actions.move_selection_next,
            ['<C-k>'] = actions.move_selection_previous,
            ['<C-Up>'] = actions.preview_scrolling_up,
            ['<C-Down>'] = actions.preview_scrolling_down,
          },
        },
        layout_strategy = 'vertical',
        layout_config = {
          height = 0.8,
          width = 0.6,
          mirror = true,
          prompt_position = 'top'
        },
        sorting_strategy = 'ascending'
      },
    }
    pcall(require('telescope').load_extension, 'fzf')
    pcall(require('telescope').load_extension, 'persisted')
  end,
}

-- set the telescope colorscheme to be cool
-- NOTE: this is only for catppuccin theme, change/remove for other themes

-- local colors = require('catppuccin.palettes').get_palette()
-- local TelescopeColor = {
-- 	TelescopeMatching = { fg = colors.flamingo },
-- 	TelescopeSelection = { fg = colors.text, bg = colors.surface0,
--         bold = true },
--
-- 	TelescopePromptPrefix = { bg = colors.surface0 },
-- 	TelescopePromptNormal = { bg = colors.surface0 },
-- 	TelescopeResultsNormal = { bg = colors.mantle },
-- 	TelescopePreviewNormal = { bg = colors.mantle },
-- 	TelescopePromptBorder = { bg = colors.surface0, fg = colors.surface0 },
-- 	TelescopeResultsBorder = { bg = colors.mantle, fg = colors.mantle },
-- 	TelescopePreviewBorder = { bg = colors.mantle, fg = colors.mantle },
-- 	TelescopePromptTitle = { bg = colors.pink, fg = colors.mantle },
-- 	TelescopeResultsTitle = { fg = colors.mantle },
-- 	TelescopePreviewTitle = { bg = colors.green, fg = colors.mantle },
-- }
--
-- for hl, col in pairs(TelescopeColor) do
-- 	vim.api.nvim_set_hl(0, hl, col)
-- end
