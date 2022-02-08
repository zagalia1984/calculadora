const calculadora = require('./calculadora')
const inquirer = require('inquirer')

const soma = calculadora.soma
const sub = calculadora.sub
const mult = calculadora.mult
const div = calculadora.div

inquirer.prompt([
    {
        name:'n1',
        message:'Digite o valor de n1:'
    },
    
    {
        name:'n2',
        message:'Digite o valor de n2:'
    },
    {
        name:'op',
        message:'Digite o tipo de operação entre soma, subtracao, multiplicacao e divisao:'
    },
]).then((answers) =>{
    let n1 = parseFloat(answers.n1)
    let n2 = parseFloat(answers.n2)
    let op = answers.op

    if (op  === "soma" ) {
        soma(n1,n2) 
    } else if (op  === "subtracao" ) {
        sub(n1,n2)
    } else if (op  === "multiplicacao" ) {
        mult(n1,n2)
    } else if (op  === "divisao" ) {
        div(n1,n2)
    } else {
        console.log("Operação inválida")
    }

}).catch((err) => console.log(err))
