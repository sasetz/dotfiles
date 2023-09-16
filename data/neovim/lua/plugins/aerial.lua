require('aerial').setup({
  on_attach = function(bufnr)
    vim.keymap.set('n', '<C-p>', ':AerialPrev<cr>', { buffer = bufnr })
    vim.keymap.set('n', '<C-n>', ':AerialNext<cr>', { buffer = bufnr })
    vim.keymap.set('n', '<C-q>', ':AerialCloseAll<cr>', { buffer = bufnr })
  end,
  layout = {
    min_width = 45,
    default_direction = 'right',
  }
})
