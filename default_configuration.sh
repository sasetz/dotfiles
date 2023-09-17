#!/usr/bin/env bash

CONFIG_NAME="$1" # display name of the app
CONFIG_DIR="$2"  # directory of the applied config
REPO_DIR="$3"    # directory in the repository starting from the repo's root
shift 3 # shift the arguments by 3 so that the rest of the script uses args
        # starting by $1

print_help() {
    echo "Usage: backup <backup-name>
       deploy
       commit"
}

case "$1" in
    backup)
        echo "$CONFIG_NAME: backup"
        # check that the config exists
        if [[ ! -e $CONFIG_DIR ]]; then
            echo "$CONFIG_NAME: no such configuration applied"
            exit
        fi
        # check that the backup folder was provided
        if [[ $# < 2 ]]; then
            print_help
            exit
        fi
        BACKUP_DIR="$HOME/backup/$2"
        mkdir -p $BACKUP_DIR # create the dir beforehand recursively
        cp -r $CONFIG_DIR $BACKUP_DIR
        ;;
    deploy)
        echo "$CONFIG_NAME: deploy"
        # check that the config exists
        if [[ ! -e $REPO_DIR ]]; then
            echo "$CONFIG_NAME: no such configuration in the repository available"
            exit
        fi
        # check if the applied config exists, remove it
        if [[ -e $CONFIG_DIR ]]; then
            rm -rf $CONFIG_DIR
        fi
        # copy the config from repo to the config dir
        cp -r $REPO_DIR $CONFIG_DIR
        ;;
    commit)
        echo "$CONFIG_NAME: commit"
        # check that the config exists
        if [[ ! -e $CONFIG_DIR ]]; then
            echo "$CONFIG_NAME: no such configuration applied"
            exit
        fi
        # create the folder in the repo, so rm doesn't display not found errors
        mkdir -p $REPO_DIR
        # remove the repo directory
        rm -rf $REPO_DIR
        cp -r $CONFIG_DIR $REPO_DIR
        ;;
    *)
        echo "$CONFIG_NAME: incorrect argument: '$1'"
        print_help
        ;;
esac
