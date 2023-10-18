return {
  'stevearc/aerial.nvim',
  opts = {
    on_attach = function(bufnr)
      vim.keymap.set('n', '<C-p>', ':AerialPrev<cr>', { buffer = bufnr, silent = true })
      vim.keymap.set('n', '<C-n>', ':AerialNext<cr>', { buffer = bufnr, silent = true })
      vim.keymap.set('n', '<C-q>', ':AerialCloseAll<cr>', { buffer = bufnr, silent = true })
    end,
    layout = {
      min_width = 45,
      default_direction = 'right',
    }
  },
  dependencies = {
  },
}
