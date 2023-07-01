// cria referência ao form e ao elemento h3 (resposta)
const frm = document.querySelector('form')
const resp1 = document.querySelector('h2')
const resp2 = document.querySelector('h3')

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', e => {
  const produto = frm.inProduto.value //obtém conteúdo dos campos
  const preco = Number(frm.inPreco.value)

  const divisao = preco * 0.5
  console.log(divisao)
  const multiplica = preco * 2 + divisao

  resp1.innerText = `${produto} - Promoção: Leve 3 por R$ ${multiplica.toFixed(
    2
  )}` // exibe resposta

  resp2.innerText = `O terceiro produto custa apenas R$: ${divisao.toFixed(2)}` // exibe resposta

  e.preventDefault() // evita envio do form
})
