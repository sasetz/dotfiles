function ll --wraps=ls --description 'List contents of directory using long format'
    ls -lAhX --group-directories-first $argv
end
