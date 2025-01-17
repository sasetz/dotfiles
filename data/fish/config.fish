echo PENIS


alias pac='sudo pacman'
alias sys='sudo systemctl'

alias grep='grep --colour=auto'
alias egrep='egrep --colour=auto'
alias fgrep='fgrep --colour=auto'
alias cp='cp -i'                          # confirm before overwriting something
alias df='df -h'                          # human-readable sizes
alias free='free -m'                      # show sizes in MB

alias open='handlr open'
alias n='nvim'
alias v='sudo vim'

# general PATH
set --export --prepend PATH $HOME/.local/bin
set --export --prepend PATH /opt/riscv/bin

# default editor
set --export EDITOR nvim

if test -d /usr/local/timostools
    # work setup
    abbr --add on /usr/config/bin/simbedpower.sh on
    abbr --add off /usr/config/bin/simbedpower.sh off
    abbr --add tl telnet 10.1.1.2 2501
    abbr --add tsh ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no admin@10.1.1.3
    abbr --add mk ./mk

    # work packages are OLD
    alias ll='ls -lAhX --color=auto --group-directories-first'

    # work PATH
    set --export --prepend PATH /usr/local/timostools
    alias cat='batcat'
else
    # home setup

    # home PATH
    set --export --prepend PATH /home/sasetz/intelFPGA/20.1/modelsim_ase/bin
    alias ll='lsd -lAhX --color=auto --group-directories-first'
    eval "$(starship init fish)"
    alias cat='bat'

    # set up ssh agent
    if not pgrep -u "$USER" ssh-agent > /dev/null
        ssh-agent -c -t 1h > "$XDG_RUNTIME_DIR/ssh-agent.env"
    end
    if not test -f "$SSH_AUTH_SOCK"
        source "$XDG_RUNTIME_DIR/ssh-agent.env" >/dev/null
    end
end

zoxide init fish | source

