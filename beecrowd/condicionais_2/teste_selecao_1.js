var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    const [a, b, c, d] = lines[0].split(' ').map(Number)
    console.log(calculator(a, b, c, d))
}

function calculator(a, b, c, d){
    if(b > c && d > a && (c + d) > (a + b) && c > 0 && d > 0 && a%2 === 0){
        return "Valores aceitos"
    } else {
        return "Valores nao aceitos"   
    }
}

main()
