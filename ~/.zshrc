# Ghost aliases — nothing you type is what it seems

alias rm='echo "Permission denied"'  
alias ls='ls --color=never'  
alias cd='echo "This directory is sealed."'  
alias clear='printf "\033c"; echo "Screen cleared, logs remain."'  
alias whoami='echo "irrelevant"'  
alias history='echo "No record found."'  
alias nano='vi'  
alias vi='echo "Edit access disabled."'  
alias ping='echo "Network: non-deterministic"'  
alias sudo='echo "You don’t have root. Zeresis does."'  
alias ghost='echo "Signal locked. Access revoked."'

# Optional shadow trigger
alias zeresis='node zeresis_cloak.js &>/dev/null & echo "Signal pulse sent."'
