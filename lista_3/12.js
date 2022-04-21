import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const num = Number(input('Type the numbers:'))

    if (verificar_paridade(num)){
        console.log(`${num} é par`)
    }else{
        console.log(`${num} é ímpar`)
    }

}

function verificar_paridade(a){
    if(a % 2 === 0){
        return true
    } else {
        return false
    }
}


main()
