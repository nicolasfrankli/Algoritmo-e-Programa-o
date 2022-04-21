import { input } from '../../io_utils.js'
function main(){
    const [n1, n2] = input('Type two numbers:').split(' ').map(Number)
    if(n_maior_menor(n1, n2)!==false){
        console.log(`${n_maior_menor(n1, n2)[0]} é o maior e ${n_maior_menor(n1, n2)[1]} é o menor.`)
    } else {
        console.log('Os números são iguais.')
    }
}

function n_maior_menor(a, b){
    if(a > b){
        return [a, b]
    } else if(b < a){
        return [b, a]
    } else {
        return false
    }
}

main()
