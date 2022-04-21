import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [n1, n2] = input('type your notes:').split(' ').map(Number)
    if(first_average(n1, n2)===true){
        console.log('Aprovado!')
    } else {
        const rec = Number(input('What grade did you get on the exam?'))
        if(second_average(rec, first_average(n1,n2))===true){
            console.log('Aprovado!')
        } else {
            console.log('Reprovado!')
        }
    }
}

function first_average(a, b){
    if((a+b)/2 > 7){
        return true
    } else
        return (a+b)/2
}

function second_average(a, b){
    if((a+b)/2 > 5){
        return true 
    } 
}

main() 