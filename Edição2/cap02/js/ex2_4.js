// cria referência ao form e ao elemento h3 (resposta)
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', e => {
  const quilo = frm.inQuilo.value //obtém conteúdo dos campos
  const consumo = Number(frm.inConsumo.value)

  const valor = (quilo / 1000) * consumo // calcula valor da entrada
  resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}` // exibe resposta
  e.preventDefault() // evita envio do form
})
