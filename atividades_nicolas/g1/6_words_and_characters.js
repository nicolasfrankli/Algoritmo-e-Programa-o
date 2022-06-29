import prompt from 'prompt-sync';
const input = prompt();

function main(){
    
    const sentence = input('Type a sentence:')
    const number_of_characteres = sentence.split('').length
    const number_of_words = sentence.split(' ').length
    
    if (number_of_characteres < 80){

        console.log('Type more than 80 characters!')
        main()

    } else if(number_of_characteres > 180) {

        console.log('Type less than 180 characters!')
        main()

    } else {

        console.log(`You type ${number_of_words} words!`)

    }


}


main()
