import prompt from 'prompt-sync';
const input = prompt()

function main(){

    let initial_value = Number(input())
    let final_value = Number(input())
    const [first_term, final_term] = arithmetic_progression_interval(initial_value, final_value, 13)
    const sum_of_multiples_of_13 = sum_of_terms_of_arithmetic_progression(first_term, final_term, 13)
    const total_sum = sum_of_terms_of_arithmetic_progression(initial_value, final_value, 1)
    console.log(total_sum - sum_of_multiples_of_13)

}


function is_multiple(number, divider){
    if(number%divider){
        return true
    }
}

function arithmetic_progression_interval(initial_value, final_value, reason){
    
    let first_term_pa = initial_value
    let final_term_pa = final_value
    
    while (!is_multiple(first_term_pa, reason)){
        first_term_pa++
    }

    while (!is_multiple(final_term_pa, reason)){
        final_term_pa--
    }

    return [first_term_pa, final_term_pa]

}

function sum_of_terms_of_arithmetic_progression(first_term, final_term, reason){

    const number_of_terms = (final_term - first_term)/reason + 1
    return (first_term + final_term)*number_of_terms/2


}


main()
