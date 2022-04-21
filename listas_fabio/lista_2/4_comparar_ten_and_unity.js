import { input } from '../../io_utils.js'
function main(){
    const [ten, unity] = input('Type a two digits number:').split('').map(Number)
    if(comparation(ten, unity)){
        console.log(`Unity and ten are equal.`)
    } else {
        console.log('Unity and ten are differents.')
    }
}

function comparation(a, b){
    if(a === b){
        return true
    } else {
        return false
    }
}

main()
