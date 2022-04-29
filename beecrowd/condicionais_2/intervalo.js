var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    const num = Number(lines[0])
    console.log(intervalo(num))
}

function intervalo(num){
    if(0 <= num && num<=25.0000){
        return "Intervalo [0,25]"
    }else if(25.00001 < num && num<=50.0000000){
        return "Intervalo (25,50]"
    }else if(50.0000001 < num && num<=75.0000000){
        return "Intervalo (50,75]"
    }else if(75.0000001 < num && num<=100.0000000){
        return "Intervalo (75,100]"
    } else{
        return "Fora de intervalo"
    }
}

main()
