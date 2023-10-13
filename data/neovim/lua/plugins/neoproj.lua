local neoproj = require('neoproj')
neoproj.setup {
  project_path = "~/projects/*",
}

neoproj.register_template {
  name = "Empty project (Git)",
  expand = "git init",
}
