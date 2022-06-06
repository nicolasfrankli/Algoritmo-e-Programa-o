import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){ 
    const [product1, product2, product3] = input('Type three prices:').split(' ').map(Number)
    console.log(`You must buy the product of price ${purchase(product1, product2,product3)}`)
}

function purchase(p1, p2, p3){
    let maior = 0
    let menor = 0
    if(p1 < p2 && p2 < p3){
        menor = p1
    } else if(p2 < p1 && p1 < p3){
        menor = p2
    } else {
        menor = p3
    }
    return menor
}

main()