import { input } from '../../io_utils.js'
function main(){
    const [n1, n2, n3 ] = input('Type three numbers:').split(' ').map(Number)
    if(n_maior(n1, n2, n3)!==false){
        console.log(`${n_maior(n1, n2, n3)} is the biggest number.`)
    } else {
        console.log('Os números são iguais.')
    }
}

function n_maior(a, b, c){
    if(a > b){
        if(a > c){
            return a
        } else if(c > a){
            return c
        } else {
            return false
        }
    } else if(b > a){
        if(b > c){
            return b
        } else if(c > b){
            return c
        } else {
            return false
        }
    } else {
        if(c > a){
            return c
        } else if(a > c){
            return a
        } else {
            return false
        }
        return false
    }
}
