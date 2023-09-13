//cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

//"ouvinte" do evento, acionado quando o botão submit for clicado

frm.addEventListener('submit', e => {
  e.preventDefault()
  const numero = Number(frm.inNumero.value) // obtém valor digitado no form

  const raiz = Math.sqrt(numero) //calcula o horário na França
  if (Number.isInteger(raiz)) {
    //se valor da raiz for um número inteiro
    resp.innerText = `A raiz quadrada de ${numero} é: ${raiz}`
  } else {
    resp.innerText = `Não há raiz para ${numero}`
  }
})
