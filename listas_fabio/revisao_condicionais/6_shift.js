import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){ 
    const shift = input('In which shift do you study?:').toUpperCase()
    console.log(greetings(shift))
}

function greetings(shift){
    if(shift == 'M'){
        return 'Good morning!'
    } else if(shift == 'V'){
        return 'Good afternoon!'
    } else if(shift == 'N'){
        return 'Good night!'
    } else {
        return 'Valor Inválido!'
    }
}

main()