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

`list` will list all available configurations in the repository

`create` can be used to add new configurations, copying the default `.config`
folder and using the universal script in it. Please, double check if you are
copying the right folders of the config, and remember that you can always
rewrite the default script so that it ignores some of the files, for example.

