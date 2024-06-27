return {
  'williamboman/mason-lspconfig.nvim',
  config = function()
    -- Ensure the servers above are installed
    local mason_lspconfig = require('mason-lspconfig')

    -- import lsp servers configuration
    local servers = require('lsp_servers')

    mason_lspconfig.setup {
      ensure_installed = vim.tbl_keys(servers),
    }

    -- nvim-cmp supports additional completion capabilities, so broadcast that to
    -- servers
    local capabilities = vim.lsp.protocol.make_client_capabilities()
    capabilities = require('cmp_nvim_lsp').default_capabilities(capabilities)

    local on_attach = function(lsp)
      return function(_, bufnr)
        local nmap = function(keys, func, desc)
          if desc then
            desc = 'LSP: ' .. desc
          end

          vim.keymap.set('n', keys, func, { buffer = bufnr, desc = desc })
        end

        nmap('<leader>lr', lsp.rename, 'Rename')
        nmap('<leader>la', lsp.code_action, 'Code Action')

        nmap('gd', lsp.definition, '[G]oto [D]efinition')
        nmap('gr', require('telescope.builtin').lsp_references, '[G]oto [R]eferences')
        nmap('gI', lsp.implementation, '[G]oto [I]mplementation')
        nmap('gD', lsp.declaration, '[G]oto [D]eclaration')
        nmap('<leader>ld', lsp.type_definition, 'Type [D]efinition')
        nmap('<leader>sd', require('telescope.builtin').lsp_document_symbols,
          '[S]earch [D]ocument symbols')

        nmap(
          '<leader>sw',
          require('telescope.builtin').lsp_dynamic_workspace_symbols,
          '[S]earch [W]orkspace symbols'
        )

        -- See `:help K` for why this keymap
        --nmap('K', lsp.hover, 'Hover Documentation')
        nmap('K', lsp.signature_help, 'Signature Documentation')

        -- Lesser used LSP functionality
        nmap(
          '<leader>lwa',
          lsp.add_workspace_folder,
          'Add workspace folder'
        )
        nmap(
          '<leader>lwr',
          lsp.remove_workspace_folder,
          'Remove workspace folder'
        )
        nmap('<leader>lwl', function()
          print(vim.inspect(lsp.list_workspace_folders()))
        end, 'List workspace folders')

        -- Create a command `:Format` local to the LSP buffer
        vim.api.nvim_buf_create_user_command(bufnr, 'Format', function(_)
          lsp.format()
        end, { desc = 'Format current buffer with LSP' })
      end
    end
    mason_lspconfig.setup_handlers {
      function(server_name)
        local init_options = {}
        if servers[server_name] ~= nil and servers[server_name].init_options ~= nil then
          init_options = servers[server_name].init_options
          servers[server_name].init_options = nil
        end
        require('lspconfig')[server_name].setup {
          capabilities = capabilities,
          on_attach = on_attach(vim.lsp.buf),
          settings = servers[server_name],
          init_options = init_options,
        }
      end,
    }
  end,
  dependencies = {
    'williamboman/mason.nvim',
    'folke/neodev.nvim',
    'hrsh7th/cmp-nvim-lsp',
  },
}
