import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [n1, n2] = input('Type two values:').split(' ').map(Number)
    console.log(rest(n1, n2))
}

function rest(a, b){
    if(a % b == 1){
        return `Sum: ${a + b} and rest: ${a % b}`
    } else if(a % b == 2){
        if(a % 2 === 0 && b % 2 === 0){
            return `${a} and ${b} are heaven.`
        } else {
            return `${a} and ${b} are odd.`
        }
    } else if(a % b == 3){
        return (a+b)*a
    } else if(a % b == 4 && b !== 0){
        return ((a+b)/b).toFixed(2)
    } else {
        return `${a*a} and ${b*b}`
    }
}

main() 