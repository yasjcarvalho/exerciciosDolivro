// cria referência ao form e ao elemento h3 (resposta)
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', e => {
  const valor = Number(frm.inValor.value) //obtém conteúdo dos campos
  const tempo = Number(frm.inTempo.value)

  const divisao = tempo / 15
  console.log(divisao)
  const total = Math.ceil(divisao) * valor

  resp.innerText = `Valor a Pagar R$: ${total.toFixed(2)}` // exibe resposta

  e.preventDefault() // evita envio do form
})
