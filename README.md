# Sasetz' dotfiles

This is the repository for my dotfiles. To apply the settings:

```bash
git clone https://github.com/sasetz/dotfiles.git
cd dotfiles
chmod u+x configs
./configs backup # create a backup for old configuration
./configs deploy
```

Your dotfiles will be backed up to `~/backup/<date and time>/<configuration>`
and then applied the ones from this repository.

```bash
./configs help     # how to use the script
```

First, use `backup` verb so that later you could restore your configs. You can
specify which ones you want to backup.

`deploy` will apply all or chosen configs to your current workspace. This will
replace the files that are there already, so make sure to backup your configs.

`commit` will copy configuration from your workspace to the repository. After
that, add and commit your changes. To add new programs, add a script to the
`./configurations` directory. You can simply copy an existing one and change
the variables at the beginning to the desired application's name.

