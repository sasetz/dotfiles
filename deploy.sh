#!/bin/bash

BACKUP_FILE="${BACKUP_FILE:-./config_list.txt}"
BACKUP_FOLDER="${BACKUP_FOLDER:-$HOME/backup/dot/dotfiles_$(date +%x_%H:%M)}"
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
