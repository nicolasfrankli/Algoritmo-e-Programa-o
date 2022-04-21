import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [n1, n2, n3, n4, n5 ] = input('Type five different numbers:').split(' ').map(Number)
    console.log(`${n_maior(n1, n2, n3, n4, n5)[0]} is the biggest number and ${n_maior(n1, n2, n3, n4, n5)[1]} is the smallest.`)
}

function n_maior(a, b, c, d, e){
    let maior = 0
    let menor = 0
    if(a > b){
        maior = a
        menor = b
    } else {
        maior = b
        menor = a
    }
    if(maior < c){
        maior = c
    } else if(menor > c){
        menor = c
    }
    if(maior < d){
        maior = d
    } else if(menor > d){
        menor = d
    }
   if(maior < e){
        maior = e
    } else if(menor > e){
        menor = e
    }
    return [maior, menor]
}

main() 




















