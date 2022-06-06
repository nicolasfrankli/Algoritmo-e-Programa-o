import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){ 
    const [grade1, grade2] = input('Type two grades:').split(' ').map(Number)
    console.log(report(grade1, grade2))
}

function report(g1, g2){
    const average = ((g1 + g2)/2).toFixed(1)
    if(average < 7){
        return 'Reprovado!'
    } else if(average == 10){
        return 'Aprovado com distinção!'
    } else {
        return 'Aprovado!'
    }
}
main()