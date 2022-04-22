import { input } from '../../io_utils.js'
function main(){
    const [d, m, y] = input('Qual a data (dd/mm/yyyy) ?').split('/').map(Number)
    if(data_valida(d, m, y)){
        console.log(`Data válida!`)
    } else{
        console.log('Data inválida!')   
    }
}

function data_valida(d, m, y){
    if(d <= 31 && m <= 12 && y <= 2022 ){
        return true
    }
}

main()
