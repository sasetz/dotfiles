-- LSP servers configuration for LSP Config
return {
  lua_ls = {
    Lua = {
      workspace = {
        checkThirdParty = false,
      }
    }
  },
  clangd = {
  },
}
