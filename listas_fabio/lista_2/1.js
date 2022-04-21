import { input } from '../../io_utils.js'
function main(){
    const [n1, n2, n3] = input('Type three numbers:').split(' ').map(Number)
    console.log(`${n_iguais(n1, n2, n3)} equal numbers`)
}

function n_iguais(a, b, c){
    if(a == b || b == a || c == b){
        if(a == b && b == c){
            return 3
        } else {
            return 2
        }
    } else {
        return 0
    }
}

main()
