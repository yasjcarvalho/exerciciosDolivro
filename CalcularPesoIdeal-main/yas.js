var inNome = document.getElementById('inNome')
var rbMasculino = document.getElementById('rbMasculino')
var rbFeminino = document.getElementById('rbFeminino')
var inAltura = document.getElementById('inAltura')
var btCalcular = document.getElementById('btCalcular')
var btLimpar = document.getElementById('btLimpar')
var outResposta = document.getElementById('outResposta')

btCalcular.addEventListener('click', calcularPeso)
function calcularPeso() {
  //page edit
  var nome = inNome.value
  var masculino = rbMasculino.checked
  var feminino = rbFeminino.checked
  var altura = Number(inAltura.value)

  //if the name was filled and gender selected
  if (nome == '' || (masculino == false && feminino == false)) {
    alert('Por favor, informe o nome e selecione o sexo...')
    inNome.focus()
    return
  }
  //if empty or not a number
  if (altura == 0 || isNaN(altura)) {
    alert('Por favor, informe a altura corretamente...')
    inAltura.focus()
    return
  }
  //which gender was tagged //Math.pow(base, expoente)
  if (masculino) {
    var peso = 22 * Math.pow(altura, 2)
  } else {
    var peso = 22 * Math.pow(altura, 2)
  }

  //apresenta a resposta (altera o conteúdo do elemento outResposta)
  outResposta.textContent =
    nome + ': Seu peso ideal é ' + peso.toFixed(2) + ' kg'
} //tofixed(2) duas casas
//cada botão chama uma função e uma função é um conjunto de ações
btLimpar.addEventListener('click', limparCampos)
function limparCampos() {
  inNome.value = ''
  rbMasculino.checked = false
  rbFeminino.checked = false
  inAltura.value = ''
  outResposta.textContent = ''
  inNome.focus()
}
