return {
  'lewis6991/gitsigns.nvim',
  opts = {
    signs = {
      add = { text = '+' },
      change = { text = '~' },
      delete = { text = '_' },
      topdelete = { text = '‾' },
      changedelete = { text = '~' },
    },
    on_attach = function (bufnr)
      local gs = package.loaded.gitsigns

      local function map(mode, l, r, d, opts)
        opts = opts or {}
        opts.buffer = bufnr
        opts.desc = d
        opts.silent = true
        vim.keymap.set(mode, l, r, opts)
      end

      -- Navigation
      map('n', ']h', function()
        if vim.wo.diff then return ']h' end
        vim.schedule(function() gs.next_hunk() end)
        return '<Ignore>'
      end, 'Hunk forward', {expr=true})

      map('n', '[h', function()
        if vim.wo.diff then return '[h' end
        vim.schedule(function() gs.prev_hunk() end)
        return '<Ignore>'
      end, 'Hunk backward', {expr=true})

      -- Actions
      map('n', '<leader>gs', gs.stage_hunk, 'Stage current hunk')
      map('n', '<leader>gr', gs.reset_hunk, 'Reset current hunk')
      map('v', '<leader>gs', function() gs.stage_hunk {vim.fn.line('.'), vim.fn.line('v')} end, 'Stage current hunk')
      map('v', '<leader>gr', function() gs.reset_hunk {vim.fn.line('.'), vim.fn.line('v')} end, 'Reset current hunk')
      map('n', '<leader>gS', gs.stage_buffer, 'Stage current buffer')
      map('n', '<leader>gu', gs.undo_stage_hunk, 'Undo staging last hunk')
      map('n', '<leader>gR', gs.reset_buffer, 'Reset current buffer')
      map('n', '<leader>gp', gs.preview_hunk, 'Preview hunk at cursor in a floating window')
      map('n', '<leader>gB', function() gs.blame_line{full=true} end, 'Line blame with full commit message')
      map('n', '<leader>tb', gs.toggle_current_line_blame, 'Toggle line blame')
      map('n', '<leader>gd', gs.diffthis, 'Diff current file')
      map('n', '<leader>gD', function() gs.diffthis('~') end, 'Diff current file with previous commit')
      map('n', '<leader>td', gs.toggle_deleted, 'Toggle viewing deleted lines in git hunks')

      -- Text object
      map({'o', 'x'}, 'ih', ':<C-U>Gitsigns select_hunk<CR>')
    end
  }
}
