-- LSP servers configuration for LSP Config
return {
  lua_ls = {
    Lua = {
      workspace = {
        checkThirdParty = false,
      }
    }
  },
  tsserver = {
    init_options = {
      preferences = {
        disableSuggestions = true,
      }
    }
  },
  clangd = {
  },
}
