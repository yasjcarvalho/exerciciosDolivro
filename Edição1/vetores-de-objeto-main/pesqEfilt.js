/*apresenta idades que possuem valor maior ou igual a 18 armazenadas no vetor
var idades = [12, 20, 15, 17, 14]
for (var i = 0; i < idades.length; i++) {
  if (idades[i] >= 18) {
    alert(idades[i])
  }
}
*/

//apresenta idade com a verificação de que não há idades maiores que 18 na lista

var idades = [12, 16, 15, 17, 14]
var maiores = false //variável flag ou sinalizadora, recebe um valor inicial antes da repetição

for (var i = 0; i < idades.length; i++) {
  //pesquisa se há maiores de idade
  if (idades[i] >= 18) {
    //se a condição for verdadeira
    alert(idades[i])
    maiores = true //modifica-se o valor da variável, se mantém o valor inicial significa que a condição testada no laço não ocorreu
  }
}

if (!maiores) {
  //se não ocorreu
  alert('Não há idades maiores que 18 na lista')
}
