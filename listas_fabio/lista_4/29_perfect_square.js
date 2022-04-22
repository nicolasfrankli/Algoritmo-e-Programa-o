import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [thousand, hundred, ten, unit] = input('Type a four digits number:').split('').map(Number)
    if(perfect_square(thousand, hundred, ten, unit)){
        console.log(`${thousand*1000 + hundred*100 + ten*10 + unit} is a perfect square.`)
    } else {
        console.log(`${thousand*1000 + hundred*100 + ten*10 + unit} is not a perfect square.`)
    }
}

function perfect_square(thousand, hundred, ten, unit){
    if(Math.sqrt(thousand*1000 + hundred*100 + ten*10 + unit) == (thousand+ten)*10 + hundred + unit){
        return true
    }
}

main()