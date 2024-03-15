abbr --add ll ls -lAhX --group-directories-first --color=auto
abbr --add cat batcat
set --export --prepend PATH $HOME/.local/bin

if test -d /usr/local/timostools
    abbr --add on /usr/config/bin/simbedpower.sh on
    abbr --add off /usr/config/bin/simbedpower.sh off
    abbr --add tl telnet 10.1.1.2 2501
    abbr --add tsh ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no admin@10.1.1.3
    abbr --add mk ./mk

    set --export --prepend PATH /usr/local/timostools
else
    set --export --prepend PATH /home/sasetz/intelFPGA/20.1/modelsim_ase/bin
end

