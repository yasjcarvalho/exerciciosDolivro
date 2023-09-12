//cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

//"ouvinte" do evento, acionado quando o botão submit for clicado

frm.addEventListener('submit', e => {
  e.preventDefault()
  const nome = frm.inNome.value // obtém valores do form
  const masculino = frm.inMasculino.checked
  const altura = Number(frm.inAltura.value)

  let peso //declara a variável peso
  if (masculino) {
    //(ou, if masculino == true)}
    peso = 22 * Math.pow(altura, 2) //Math.pow eleva ao quadrado
  } else {
    peso = 21 * Math.pow(altura, 2)
  }

  //apresenta a resposta (altera o conteúdo do elemento h3 da página)
  resp.innerText = `${nome}, seu peso ideal é: ${peso.toFixed(3)} kg`
})

//a condição poderia ter sido feita com const
// if (masculino) {
//   const peso = 22 * Math.pow(altura, 2)
//   resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}`
// } else {
//   const peso = 21 * Math.pow(altura, 2)
//   resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}`
// }

//a condição poderia ter sido feita com operador ternário
// const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)

frm.addEventListener('reset', () => {
  resp.innerText = '' //limpa o conteúdo do elemento h3 que exibe a resposta
})
