var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    const [x, y] = lines[0].split(' ').map(Number)
    let resultado
    
    if (x === 0 && y === 0){
        resultado = 'Origem'
    }else if (y === 0){
        resultado = 'Eixo X'   
    }else if (x === 0){
        resultado = 'Eixo Y'
    }else if (x > 0 && y > 0){
        resultado = 'Q1'
    }else if (x < 0 && y > 0){
        resultado = 'Q2'
    }else if (x < 0 && y < 0){
        resultado = 'Q3'
    }else{
        resultado = 'Q4'
    }

    console.log(resultado)

}

main()
