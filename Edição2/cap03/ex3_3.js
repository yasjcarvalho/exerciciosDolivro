const prompt = require('prompt-sync')() // adiciona o pacote ao programa
const salario = Number(prompt('Salário R$: ')) //lê os dados de entrada
const tempo = Number(prompt('Tempo (anos): '))
const quadrienos = Math.floor(tempo / 4) //calcula os quadrienos
const acrescimo = (salario * quadrienos) / 100 //... e acréscimo
console.log(`Quadriênios: ${quadrienos}`) //exibe as respostas
console.log(`Salário Final R$:  ${(salario + acrescimo).toFixed(2)}`)
