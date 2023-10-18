-- {{{ Unused ccls configuration
-- _G.ccls_cmd = '/usr/local/timostools/linux/ccls'
-- _G.ccls_init_options = {}
--
-- if vim.fn.getcwd():find('panos') then
--   _G.ccls_init_options = {
--     index = {
--       blacklist = {
--         "./mgmt_core/build-tools/cython-0.28.x/.",
--         "./bcm/.*",
--         "./bcm_.*",
--         "./build/ptr/.*",
--       },
--       initialBlacklist = {
--         "./mgmt_core/build-tools/cython-0.28.x/.",
--         "./bcm/.*",
--         "./bcm_.*",
--         "./build/ptr/.*",
--       },
--       initialWhitelist = {
--         "./gmi/.",
--         "./mgmt_core/.",
--         "./mgmt_agent/.",
--         "./mgmt_schema/.",
--         "./mci/."
--       },
--       whitelist = {
--         "./gmi/.",
--         "./mgmt_core/.",
--         "./mgmt_agent/.",
--         "./mgmt_schema/.",
--         "./mci/."
--       },
--     }
--   }
-- end
--
-- local lspconfig = require('lspconfig')
-- local ccls_init_opts_local = (_G.ccls_init_options ~= nil) and _G.ccls_init_options or {}
-- local ccls_init_opts = vim.tbl_deep_extend("force", ccls_init_opts_local, {
--   cache = {
--     directory = vim.fn.expand("$HOME/.ccls-cache"),
--   },
--   client = {
--     snippet_support = true,
--     placeholder = false,
--   },
--   index = { on_change = true },
--   highlight = { ls_ranges = true },
-- })

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
-- }}}

return {
  'neovim/nvim-lspconfig',
  dependencies = {
    -- lsp manager
    'williamboman/mason.nvim',
    'williamboman/mason-lspconfig.nvim',

    -- spinner and status for lsp
    'j-hui/fidget.nvim',

    -- additional lua configuration and docs
    'folke/neodev.nvim',
  },
}
-- vim: ts=2 sts=2 sw=2 et fdm=marker
