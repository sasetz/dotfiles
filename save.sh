#!/bin/bash

BACKUP_FILE="${BACKUP_FILE:-./config_list.txt}"
BACKUP_LIST=()

while read -r LINE; do
    BACKUP_LIST+=("$LINE")
done <$BACKUP_FILE

copy() {
    for i in ${BACKUP_LIST[@]}; do
        mkdir -p "./$(dirname "$i")" # create the folder that we are going to copy
        cp -r "$HOME/$i" "./$i"
    done
}

copy
echo "Your dotfiles have been saved to: $(pwd)"
