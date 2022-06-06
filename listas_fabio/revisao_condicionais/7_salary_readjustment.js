import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){ 
    const salary = Number(input('How much do you earn?'))
    console.log(`R$${salary}\nPercentual increase: ${greetings(salary)[0]}\nIncrease: ${greetings(salary)[1]}\nNew salary ${greetings(salary)[2]}`)
}

function greetings(salary){
    let percentual_increase = 0
    let increase = 0
    let new_salary = 0
    if(salary <= 280){
        percentual_increase = '20%'
        increase = 0.2*salary 
        new_salary = salary + increase
    } else if(salary <= 700){
        percentual_increase = '15%'
        increase = 0.15*salary
        new_salary = salary + increase
    } else if(salary <= 1500){
        percentual_increase = '10%'
        increase = 0.1*salary
        new_salary = salary + increase
    } else {
        percentual_increase = '5%'
        increase = 0.05*salary
        new_salary = salary + increase
    }
    return [percentual_increase, increase, new_salary]
}

main()