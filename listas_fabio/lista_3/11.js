import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [option, num1, num2, num3] = input('Type the numbers:').split(' ').map(Number)

    if (mesclar_option_numero(option, num1, num2, num3)){
        console.log(mesclar_option_numero(option, num1, num2, num3))
    }else{
        console.log('Opção inválida!')
    }

}

function mesclar_option_numero(a, b, c, d){
    if(a == 1){
        return b
    } else if(a == 2){
        return c
    } else if(a == 3){
        return d
    } else {
        return false
    }
}


main()
