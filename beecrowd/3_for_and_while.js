import prompt from 'prompt-sync';
const input = prompt({sigint: true});

function main(){
    let i = 0
    let output = result()
    while(i < output.length){
        let line = ''
        let sum = 0
        for(let elements of output[i]){
            line += `${elements} `
            sum +=elements
        }
        console.log(`${line}Sum=${sum}`)
        i++
    }

}

function result(){
    let function_output =[]
    let n1 = 1
    let n2 = 1
    while(true){
        let [n1, n2] = input('').split(' ').map(Number)
        let primary_list = []
        if(n1 < 1 || n2 < 1){
            break
        }else if(n1 > n2){
            while (n1 >= n2){
                primary_list.push(n2)
                n2++
            }
            function_output.push(primary_list)
        } else {
            while (n2 >= n1){
                primary_list.push(n1)
                n1++
            }
            function_output.push(primary_list)
        }
    }
    return function_output
}

main()
