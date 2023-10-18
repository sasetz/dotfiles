vim.api.nvim_create_autocmd({'BufEnter', 'BufWinEnter'}, {
  pattern = {'*.c', '*.cpp', '*.h'},
  callback = function ()
    vim.keymap.set('n', '<leader>lh', ':ClangdSwitchSourceHeader<cr>',
      { desc = 'LSP: switch source/header', silent = true, noremap = true })
  end
})

-- [[ Highlight on yank ]]
local highlight_group = vim.api.nvim_create_augroup('YankHighlight', { clear = true })
vim.api.nvim_create_autocmd('TextYankPost', {
  callback = function()
    vim.highlight.on_yank()
  end,
  group = highlight_group,
  pattern = '*',
})

-- return to the last position in a file that was closed
local userconfig = vim.api.nvim_create_augroup('UserConfig', { clear = true })
vim.api.nvim_create_autocmd({'BufWinEnter'}, {
  group = userconfig,
  desc = 'return cursor to where it was last time closing the file',
  pattern = '*',
  command = 'silent! normal! g`"zv',
})

