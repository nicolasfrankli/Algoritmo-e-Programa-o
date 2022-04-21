import { input } from '../../io_utils.js'
function main(){
    const n = Number(input('Digite um número:'))
    console.log(primo(n))
}

function primo(a){
    let count = 0
    while (count < a) {
        if (count > 1 && a%count === 0 && count !== a) {
            return 'Não é primo!'
            break;
        } else if(count == a - 1 || a == 1){
            return 'É primo!'
        }
        count += 1;
    }
}
main()

