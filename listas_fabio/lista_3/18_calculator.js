import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [n1, n2, c] = input('Type two values and the operation:').split(' ').map(Number)
    console.log(calculator(n1, n2, c))
}

function calculator(a, b, c){
    if(c == 1){
        return `Sum: ${a + b} `
    } else if(c == 2){
        return `Sub: ${a - b}`
    } else if(c == 3){
        return `Mul: ${a * b}`
    } else if(c == 4){
        return `Div: ${a / b}`
    } else {
        return `Operação inválida!`
    }
}

main() 
