#!/bin/bash

BACKUP_FILE="${BACKUP_FILE:-./config_list.txt}"
BACKUP_FOLDER="${BACKUP_FOLDER:-$HOME/backup/dot/dotfiles_$(date +%F_%H:%M)}"
BACKUP_LIST=()

while read -r LINE; do
    BACKUP_LIST+=("$LINE")
done <$BACKUP_FILE

backup() {
    mkdir -p $BACKUP_FOLDER
    for i in ${BACKUP_LIST[@]}; do
        mkdir -p "$BACKUP_FOLDER/$(dirname "$i")"
        cp -r "$HOME/$i" "$BACKUP_FOLDER/$i"
    done
    echo "Your dotfiles have been backed up at $HOME$BACKUP_FOLDER"
}

replace() {
    if [[ ! -f "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim ]]; then
        sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \
       https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
        echo "\nVim-plug has been installed. Run :PlugInstall after the first launch to install all plugins."
        echo "npm might be needed, install it before using CoC in Neovim"
    fi
    for i in ${BACKUP_LIST[@]}; do
        if [[ -d ./$i || -f ./$i ]]; then
            mkdir -p "$HOME/$(dirname "$i")"
            cp -r "./$i" "$HOME/$i"
        else
            echo "No such file or directory in the source: $i"
        fi
    done
    echo "New files have been deployed"
}

backup
replace
