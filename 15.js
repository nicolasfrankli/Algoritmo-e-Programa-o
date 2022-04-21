import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    const [h1, r1] = input('Type the number of hours you teach and how much you receive per hour:').split(' ').map(Number)
    const [h2, r2] = input('Type the number of hours you teach and how much you receive per hour:').split(' ').map(Number)
    console.log(`The teacher that have the highest salary is who wins ${highest_salary(h1, r1, h2, r2)[1]} per hour and teaches ${highest_salary(h1, r1, h2, r2)[0]} hours.`)
}

function highest_salary(a, b, c, d){
    if(a*b > c*d){
        return [a, b]
    } else{
        return [c, d]
    }
}

main() 