import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [side_a, side_b, side_c] = input('Digite os valores: ').split(' ').map(Number)

    if (verificar_lado_triangulo(side_a, side_b, side_c)){
        console.log(verificar_lado_triangulo(side_a, side_b, side_c))
    }else{
        console.log('Não formam triângulo!')
    }

}

function verificar_lado_triangulo(a, b, c){
    if (c < (a+b)){
        if(a == b && b == c){
            return 'Formam um triângulo equilátero!'
        } else if(a == b){
            return 'Formam um triângulo isósceles!'
        } else if(a!=b && b!=c && a!=c){
            return 'Formam um triângulo escaleno!'
        }
    }else{
        return false
    }
}


main()