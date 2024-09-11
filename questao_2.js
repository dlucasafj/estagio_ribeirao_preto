const fs = require('fs')
const readline = require('readline')


async function readFileInputs(){
    const fileStream = fs.createReadStream("./inputs/search_letter.txt")
    
    const interface = readline.createInterface({input: fileStream, crlfDelay: Infinity})
    
    for await (const words of interface){
         searchLetter(words)
    }
}

function searchLetter(word){
    let aux = word.toLowerCase()
    let qtd_vezes = 0

    if(aux.includes('a')){
        for(let i =0; i<aux.length; i++){
            if(aux[i] == 'a'){
                qtd_vezes+=1
            }
        }
    }

    console.log(`Existe(m) ${qtd_vezes} letra(s) 'a' na palavra ${word} \n`)

}

readFileInputs()