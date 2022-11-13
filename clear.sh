#!/bin/bash

BACKUP_FILE="${BACKUP_FILE:-./config_list.txt}"
BACKUP_LIST=()

while read -r LINE; do
    BACKUP_LIST+=("$LINE")
done <$BACKUP_FILE

del() {
    for i in ${BACKUP_LIST[@]}; do
        rm -r ./$i 2>/dev/null
    done
    for i in ${BACKUP_LIST[@]}; do
        if [[ $(dirname $i) != . ]]; then
            rm -r ./$(dirname $i) 2>/dev/null
        fi
    done
}

del
echo "Dotfiles from $(pwd) have been cleared"
