var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    const [a, b] = lines[0].split(' ').map(Number)
    console.log(`Total: R$ ${total(a, b)}`)
}

function total(a, b){
    if(a == 1){
        return (b*4).toFixed(2)
    }else if(a == 2){
        return (b*4.5).toFixed(2)
    }else if(a == 3){
        return (b*5).toFixed(2)
    }else if(a == 4){
        return (b*2).toFixed(2)
    } else if(a == 5){
        return (b*1.5).toFixed(2)
    }
}

main()
