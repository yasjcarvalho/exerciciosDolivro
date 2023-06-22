//Vetores de objetos

var carros = [] //define o vetor de objeto (produto) que contém a lista de objetos

/*adiciona elemento ao final do vetor*/
carros.push({
  modelo: 'Fusca',
  preco: 6500
}) //atribui marca e preço aos atributos
carros.push({ modelo: 'Escort', preco: 7500 }) //escort, fusca; 6500, 7800 são elementos

for (var i = 0; i < carros.length; i++) {
  //percorrer os elementos do vetor e apresentar o vonteúdo de cada um dos seus atributos
  alert(carros[i].modelo + ' - R$: ' + carros[i].preco)
}

//definir um vetor de objetos nos permite realizar operações sobre esse vetor, como classificar o seus elementos(7.800 e Escort) por um dos seus atributos(preco e modelo).
