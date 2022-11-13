# My dotfiles

This is the repository for my dotfiles. To apply the settings:

```
git clone https://github.com/sasetz/dotfiles.git
cd dotfiles
chmod u+x deploy.sh
./deploy.sh
```

Your dotfiles will be backed up to `~/backup/dot/dotfiles_<date and time>` and replaced with the ones from the repo.

The list of directories and files that need to be copied is located at `config_list.txt`.
Only files that are specified there are backed up, saved and replaced.

To save your current dotfiles to the repo, use `save.sh` script.
To clear the old ones from the repo, use `clear.sh` script.
