var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function main(){
    const [n1, n2, n3, n4] = lines[0].split(' ').map(Number)
    console.log(`Media: ${((n1*2 + n2*3 + n3*4 + n4*1)/10).toFixed(1)}`)
    if (boletim(n1, n2, n3, n4)){
        console.log("Aluno aprovado.")
    } else if((n1*2 + n2*3 + n3*4 + n4*1)/10 >= 5){
        console.log("Aluno em exame.")
        const n = Number(lines[1])
        console.log(`Nota do exame: ${lines[1]}`)
        console.log(rec(n, n1, n2, n3, n4))
        console.log(`Media final: ${((n + ((n1*2 + n2*3 + n3*4 + n4*1)/10))/2).toFixed(1)}`)
    } else{
        console.log("Aluno reprovado.")
    }
}

function boletim(n1, n2, n3, n4){
    if((n1*2 + n2*3 + n3*4 + n4*1)/10 >= 7){
        return "Aluno aprovado."
    }else{
        return false
    }
}

function rec(n, n1, n2, n3, n4){
    if((n + ((n1*2 + n2*3 + n3*4 + n4*1)/10))/2 >= 5){
        return "Aluno aprovado."
    }else{
        return "Aluno reprovado."
    }
}

main()
