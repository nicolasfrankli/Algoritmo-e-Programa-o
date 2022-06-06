import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){ 
    const [hour_value, hours_per_month] = input('How much is your worth and how many hours do you work per month?').split(' ').map(Number)
    net_salary(hour_value, hours_per_month)
}

function net_salary(hour_value, hours_per_month){
    const salary = hour_value * hours_per_month
    let ir = 0
    let ir_text = ''
    if(salary <= 900){
        ir_text = '0%'
        ir = 0
    } else if(salary <= 1100){
        ir_text = '5%'
        ir = 0.05
    } else if(salary <= 2500){
        ir_text = '10%'
        ir = 0.1
    } else {
        ir_text = '20%'
        ir = 0.2
    }
    console.log(`Salário Bruto:(${hour_value}*${hours_per_month})  : R$ ${salary.toFixed(2)}\n(-) IR (${ir_text})    :R$ ${(ir*salary).toFixed(2)}\n(-) INSS (10%)    :R$ ${(0.1*salary).toFixed(2)}\nFGTS(11%)    :R$ ${(0.11*salary).toFixed(2)}\nTotal de descontos    :R$ ${(ir*salary + 0.1*salary).toFixed(2)}\nSalário líquido    :R$ ${(salary - (ir*salary + 0.1*salary)).toFixed(2)}`)
}

main()