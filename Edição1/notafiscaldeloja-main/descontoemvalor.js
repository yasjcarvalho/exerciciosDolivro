// ler o valor do produto
var valor = Number(prompt('Qual o valor do produto R$: '))

// calcule
var avista = valor * 0.15
var resultado = valor - avista
var cartao = valor / 5
// saída
alert(
  'LOJA DA IVONE' +
    '\nPreço R$: ' +
    valor.toFixed(2) +
    '\nÀ vista R$: ' +
    resultado.toFixed(2) +
    '\nou em 5x sem juros de R$: ' +
    cartao.toFixed(2)
)
//colocar tofixed(2) para 2 casas decimais
//colocar Number()
//use \n para quebrar linha
