import { input } from '../../io_utils.js'
function main(){
    const [da, ma, ya] = input('Qual a data atual (dd/mm/yyyy) ?').split('/').map(Number)
    const [dn, mn, yn] = input('Qual a sua data de nascimento (dd/mm/yyyy) ?').split('/').map(Number)
    console.log(`Você tem ${((365*(ya-yn)+12*(ma-mn)+(da-dn))/365).toFixed(2)} anos`)
}

main()
