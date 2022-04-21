import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [n1, n2, n3, n4, n5] = input('Type five different numbers:').split(' ').map(Number)
    console.log(`${media_e_maior(n1, n2, n3, n4, n5)[0]} is the average and ${media_e_maior(n1, n2, n3, n4, n5)[1]} are bigger than average.`)
}

function media_e_maior(a, b, c, d, e){
    let media = ((a+b+c+d+e)/5).toFixed(2)
    let maior = []
    if(a > media){
        maior.push(a)
    }
    if(b > media){
        maior.push(b)
    }
    if(c > media){
        maior.push(c)
    }
    if(d > media){
        maior.push(d)
    }
    if(e > media){
        maior.push(e)
    }
    console.log(maior)
    return [media, maior]
}

main() 