import prompt from 'prompt-sync';
const input = prompt();

function main(){
    
    const [monthly_income, loan_amount, loan_term] = input('Type your monthly income, loan amount and the loan term:').split(' ').map(Number)
    
    if (loan_term < 2 || loan_term > 24){
        console.log('The loan term must be bigger than 2 and lowest than 24')
    } else {
        const iof = (0.0038 * loan_amount) + (0.000082 * 30 * loan_term)
        const interest = (monthly_income + iof)
        const selic = 0.1275
        
        if(loan_term <= 6){
            taxes = 0.5 * selic
        } else if(loan_term <= 12){
            taxes = 0.75 * selic
        } else if (loan_term <= 18){
            taxes = selic
        } else {
            taxes = 1.38 * selic
        }
    }


    console.log(`IOF: R$${iof.toFixed(2)}
Interest: ${().toFixed(2)}`)


}


main()
