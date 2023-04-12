// ler o nome e as notas
var aluno = prompt('Qual o nome do aluno: ')
var nota1 = Number(prompt('Qual foi a primeira nota: '))
var nota2 = Number(prompt('Qual foi a segunda nota: '))

// calcule
var soma = nota1 + nota2
var resultado = soma / 2

// saída
alert(aluno + ' sua média é: ' + resultado.toFixed(2))
//colocar tofixed(2) para 2 casas decimais
//colocar Number()
