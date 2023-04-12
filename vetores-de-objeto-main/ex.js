for (let i = 0; i < 5; i++) {
  var nome = prompt('Qual o seu nome?')

  var idade = Number(prompt('Qual a sua idade?'))

  var matricula = Number(prompt('Qual a sua matrícula?'))

  if (idade >= 18) {
    document.write(
      'matrícula: ' +
        matricula +
        '. ' +
        nome +
        ', você tem ' +
        idade +
        ' anos. Você é maior de idade!' +
        '<br>'
    )
  } else {
    document.write(
      'matrícula: ' +
        matricula +
        '. ' +
        nome +
        ', você tem ' +
        idade +
        ' anos. Você é menor de idade!' +
        '<br>'
    )
  }
}

let busca = Number(prompt('Qual matricula será buscada?'))
