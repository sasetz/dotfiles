require('persisted').setup({
  autoload = true,
  on_autoload_no_session = function()
    vim.notify("No existing session to load.")
  end,
  should_autosave = function()
    if vim.bo.filetype == 'dashboard' then
      return false
    end
    return true
  end,
})
