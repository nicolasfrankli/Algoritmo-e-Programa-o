import prompt from 'prompt-sync';
const input = prompt();

function main(){
    
    const current_dollar_exchange_rate = input('Dollar exchange rate on June 20: U$')
    const quantity_of_dollars_to_buy = input('How many dollars do you want to buy?')
    const value = current_dollar_exchange_rate * quantity_of_dollars_to_buy
    console.log(`IOF: R$${(value * 0.011).toFixed(2)}
You must pay ${(value * 1.011).toFixed(2)}`)


}


main()
