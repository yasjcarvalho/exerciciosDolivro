// cria referência ao form e ao elemento h3 (resposta)
const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', e => {
  const medicamento = frm.inMedicamento.value //obtém conteúdo dos campos
  const preco = Number(frm.inPreco.value)

  const promocao = preco * 2
  const resto = promocao % 2
  const resultado = promocao - resto
  resp1.innerText = `Promoção de ${medicamento}` // exibe resposta
  resp2.innerText = `Leve 2 por apenas R$: ${resultado.toFixed(2)}` // exibe resposta

  e.preventDefault() // evita envio do form
})
