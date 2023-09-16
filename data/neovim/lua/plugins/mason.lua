-- LSP settings.
--  This function gets run when an LSP connects to a particular buffer.

-- Enable the following language servers
--  Feel free to add/remove any LSPs that you want here. They will
--  automatically be installed.
--
--  Add any additional override configuration in the following tables. They
--  will be passed to the `settings` field of the server config. You must look
--  up that documentation yourself.

-- TODO: restrict the size of the hint window
-- TODO: add keybinds for reformatting the file
-- TODO: add option to put the arguments of a call to separate lines
local servers = {
  lua_ls = {},
  rust_analyzer = {},
}

-- Setup neovim lua configuration
require('neodev').setup()
--
-- nvim-cmp supports additional completion capabilities, so broadcast that to
-- servers
-- local capabilities = vim.lsp.protocol.make_client_capabilities()
-- capabilities = require('cmp_nvim_lsp').default_capabilities(capabilities)

-- Setup mason so it can manage external tooling
require('mason').setup()

-- Ensure the servers above are installed
local mason_lspconfig = require('mason-lspconfig')

mason_lspconfig.setup {
  ensure_installed = vim.tbl_keys(servers),
}

-- function that takes an lsp as a table that contains some special properties
-- and bakes it into the function itself
-- it returns a function that refers to the custom lsp, but doesn't take any
-- more arguments
local bake_on_attach = function (lsp)
  -- LSP keymaps
  local raw_on_attach = function(_, bufnr)
    -- In this case, we create a function that lets us more easily define
    -- mappings specific for LSP related items. It sets the mode, buffer and
    -- description for us each time.
    local nmap = function(keys, func, desc)
      if desc then
        desc = 'LSP: ' .. desc
      end

      vim.keymap.set('n', keys, func, { buffer = bufnr, desc = desc })
    end

    nmap('<leader>rn', lsp.rename, '[R]e[n]ame')
    nmap('<leader>ca', lsp.code_action, 'Code Action')

    nmap('gd', lsp.definition, '[G]oto [D]efinition')
    nmap('gr', require('telescope.builtin').lsp_references, '[G]oto [R]eferences')
    nmap('gI', lsp.implementation, '[G]oto [I]mplementation')
    nmap('<leader>D', lsp.type_definition, 'Type [D]efinition')
    nmap('<leader>ds', require('telescope.builtin').lsp_document_symbols,
      '[D]ocument [S]ymbols')

    nmap(
      '<leader>ws',
      require('telescope.builtin').lsp_dynamic_workspace_symbols,
      '[W]orkspace [S]ymbols'
    )

    -- See `:help K` for why this keymap
    nmap('K', lsp.hover, 'Hover Documentation')
    nmap('<C-k>', lsp.signature_help, 'Signature Documentation')

    -- Lesser used LSP functionality
    nmap('gD', lsp.declaration, '[G]oto [D]eclaration')
    nmap(
      '<leader>wa',
      lsp.add_workspace_folder,
      '[W]orkspace [A]dd Folder'
    )
    nmap(
      '<leader>wr',
      lsp.remove_workspace_folder,
      '[W]orkspace [R]emove Folder'
    )
    nmap('<leader>wl', function()
      print(vim.inspect(lsp.list_workspace_folders()))
    end, '[W]orkspace [L]ist Folders')

    -- Create a command `:Format` local to the LSP buffer
    vim.api.nvim_buf_create_user_command(bufnr, 'Format', function(_)
      lsp.format()
    end, { desc = 'Format current buffer with LSP' })
  end
  return raw_on_attach
end

local capabilities = vim.lsp.protocol.make_client_capabilities()
capabilities = require('cmp_nvim_lsp').default_capabilities(capabilities)

mason_lspconfig.setup_handlers {
  function(server_name)
    require('lspconfig')[server_name].setup {
      capabilities = capabilities,
      on_attach = bake_on_attach(vim.lsp.buf),
      settings = servers[server_name],
    }
  end,
}

local rt = require("rust-tools")

rt.setup({
  server = {
    on_attach = bake_on_attach(rt),
  },
})

_G.ccls_cmd = '/usr/local/timostools/linux/ccls'
_G.ccls_init_options= {}

if vim.fn.getcwd():find('panos') then
    _G.ccls_init_options = {
      index = {
          blacklist = {
              "./mgmt_core/build-tools/cython-0.28.x/.",
              "./bcm/.*",
              "./bcm_.*",
              "./build/ptr/.*",
            },
          initialBlacklist = {
              "./mgmt_core/build-tools/cython-0.28.x/.",
              "./bcm/.*",
              "./bcm_.*",
              "./build/ptr/.*",
            },
          initialWhitelist = {
              "./gmi/.",
              "./mgmt_core/.",
              "./mgmt_agent/.",
              "./mgmt_schema/.",
              "./mci/."
            },
          whitelist = {
              "./gmi/.",
              "./mgmt_core/.",
              "./mgmt_agent/.",
              "./mgmt_schema/.",
              "./mci/."
            },
        }
    }
end

local lspconfig = require('lspconfig')
local ccls_init_opts_local = (_G.ccls_init_options ~= nil) and _G.ccls_init_options or {}
local ccls_init_opts = vim.tbl_deep_extend("force", ccls_init_opts_local, {
  cache = {
    directory = vim.fn.expand("$HOME/.ccls-cache"),
  },
  client = {
    snippet_support = true,
    placeholder = false,
  },
  index = { on_change = true },
  highlight = { ls_ranges = true },
})

-- lspconfig.ccls.setup {
--   capabilities = capabilities,
--   filetypes = { "c", "cpp", "cuda", "objc", "objcpp", },
--   rootPatterns = { "compile_commands.json", ".ccls-root", ".ccls", ".git" },
--   ls_ranges = true,
--   init_options = ccls_init_opts,
--   cmd = { _G.ccls_cmd or "ccls" },
--   on_attach = bake_on_attach(vim.lsp.buf),
-- }

-- code for ccls language server
-- local util = require 'lspconfig.util'
-- local server_config = {
--     filetypes = { 'c', 'cpp', 'objc', 'objcpp', 'opencl' },
--     root_dir = function(fname)
--         return util.root_pattern('compile_commands.json', 'compile_flags.txt', '.git')(fname)
--             or util.find_git_ancestor(fname)
--     end,
--     init_options = { cache = {
--         directory = vim.fs.normalize '~/.cache/ccls',
--     } },
--     on_attach = on_attach,
--     --capabilities = my_caps_table_or_func
-- }
-- require("ccls").setup { lsp = { lspconfig = server_config } }

