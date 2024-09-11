const fs = require('fs')
const readline = require('readline')


async function readFileInputs(){
    const fileStream = fs.createReadStream("./inputs/fibonacci_numbers.txt")
    
    const interface = readline.createInterface({input: fileStream, crlfDelay: Infinity})
    
    for await (const line of interface){
        calculateFibonacci(parseInt(line))
    }
}


function calculateFibonacci(n){
    let a = 0;
    let b = 1;
    let fibonacciSequence = [a, b]
    
    while (b<n){
        let temp = a + b;
        a = b;
        b = temp;
        fibonacciSequence.push(b)
    }

    if(fibonacciSequence.includes(n)){
        console.log(`\n O número ${n} pertence a sequência \n\n`)
    }else{
        console.log(`\n\n O numero ${n} não pertence a sequência \n\n\n`)
    }
} 


readFileInputs()
