import { input } from '../../io_utils.js'
function main(){
    const [n1, n2, n3] = input('Type three numbers:').split(' ').map(Number)
    console.log(n_maior(n1, n2, n3))
}

function n_maior(a, b, c){
    if(a <= b && b <= c){
        return [a, b, c]
    } else if(a <= c && c <= b){
        return [a, c, b]
    } else if(b <= a && a <= c){
        return [b, a, c]
    } else if(b <= c && c <= a){
        return [b, c, a]
    } else if(c <= a && a <= b){
        return [c, a, b]
    } else if(c <= b && b <= a){
        return [c, b, a]
    }
}

main()