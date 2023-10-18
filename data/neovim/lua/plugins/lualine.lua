return {
  'nvim-lualine/lualine.nvim',
  opts = {
    options = {
      icons_enabled = true,
      theme = 'auto',
      component_separators = { left = '  ', right = '  ' },
      section_separators = { left = '', right = '' },
      disabled_filetypes = { 'NvimTree', 'aerial', 'Trouble' }
    },
    sections = {
      lualine_a = { 'mode' },
      lualine_b = { 'branch', {
        'diff',
        symbols = { added = ' ', modified = ' ', removed = ' ' },
      }, 'diagnostics' },
      lualine_c = { 'filename' },
      lualine_x = {
        {
          function()
            local msg = 'no lsp'
            local buf_ft = vim.api.nvim_buf_get_option(0, 'filetype')
            local clients = vim.lsp.get_active_clients()
            if next(clients) == nil then
              return msg
            end
            for _, client in ipairs(clients) do
              local filetypes = client.config.filetypes
              if filetypes and vim.fn.index(filetypes, buf_ft) ~= -1 then
                return client.name
              end
            end
            return msg
          end,
          icon = ' ',
        },
        'encoding',
        {
          'fileformat',
          icons_enabled = false,
        },
        'filetype' },
      lualine_y = { 'progress' },
      lualine_z = { 'location' }
    },
    inactive_sections = {
      lualine_a = {},
      lualine_b = {},
      lualine_c = {},
      lualine_x = {},
      lualine_y = {},
      lualine_z = { 'location' },
    }
  },
}
