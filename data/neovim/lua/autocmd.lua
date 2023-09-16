
-- automatically source and re-compile packer whenever you save this init.lua
local packer_group = vim.api.nvim_create_augroup('Packer', { clear = true })
vim.api.nvim_create_autocmd('BufWritePost', {
  command = 'source <afile> | silent! LspStop | silent! LspStart | PackerCompile',
  group = packer_group,
  pattern = vim.fn.expand '$MYVIMRC',
})

vim.api.nvim_create_autocmd({'BufEnter', 'BufWinEnter'}, {
  pattern = {'*.c', '*.cpp', '*.h'},
  callback = function (ev)
    vim.keymap.set('n', '<leader>hh', ':Ouroboros<cr>',
      { desc = 'Switch [h]eader/implementation' })
  end
})

