-- nvim-tree configs
local function tree_on_attach(bufnr)
  local api = require "nvim-tree.api"
  local function opts(desc)
    return {
      desc = "nvim-tree: " .. desc,
      buffer = bufnr,
      noremap = true,
      silent = true,
      nowait = true
    }
  end

  -- default mappings
  api.config.mappings.default_on_attach(bufnr)

  vim.keymap.set('n', '-', api.tree.change_root_to_parent, opts('Up'))
  vim.keymap.set('n', '<Tab>', api.node.open.preview, opts('Open Preview'))
  vim.keymap.set('n', 'a', api.fs.create, opts('Create'))
  vim.keymap.set('n', 'L', api.node.open.tab, opts("Open in new tab"))
  vim.keymap.set('n', '<CR>', api.node.open.edit, opts('Open'))
  vim.keymap.set('n', 'l', api.node.open.edit, opts("Open in current buffer"))
  vim.keymap.set('n', 'h', api.node.navigate.parent_close, opts("Close node"))
  vim.keymap.set('n', 'H', api.tree.collapse_all, opts("Collapse all"))
end

require('nvim-tree').setup({
  view = {
    width = 45
  },
  on_attach = tree_on_attach,
  actions = {
    open_file = {
      quit_on_open = true
    }
  },
  sync_root_with_cwd = true,
  respect_buf_cwd = true,
  update_focused_file = {
    enable = true,
    update_root = true,
  },
  disable_netrw = true,
  hijack_netrw = true,
  hijack_cursor = true,
  hijack_unnamed_buffer_when_opening = true,
  sort_by = 'extension',
})

