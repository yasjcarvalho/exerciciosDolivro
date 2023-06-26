// cria referência ao form e ao elemento h3 (onde será exibida a resposta)

const frm = document.querySelector('form')
const resp = document.querySelector('h3')

// cria um "ouvinte" de evento, adicionado quando o botão submit for clicado
frm.addEventListener('submit', e => {
  const nome = frm.inNome.value //obtém o nome digitado no form
  resp.innerText = `Olá ${nome}` //exibe a resposta do programa
  e.preventDefault() //evita envio do form
})


// const frm = document.querySelector("form")
// const nome = frm.inNome.value

//ou

// const frm = document.querySelector('form').inNome.value