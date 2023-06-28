<!-- Métodos querySelector() e getElementById -->
<script>
  const resp = document.querySelector('h3') // primeiro elemento h3 da página
  const cor = document.querySelector('#inCor') //elememto com id=inCor
  const lista = document.querySelector('.lista') // elemento da class=lista
</script>

<!--
  vantagem:
    querySelector() permite trablhar com tag name, id ou classe
  desvantagem:
    não é suportado para versões antigas de navegadores
      como superar essa desvantagem?
      com transpiladores de códigos: Babel(Babeljs.io)

-->

## Introdução a eventos e funções

Adicionando ouvinte a um elemento da página, utiliza-se o método addEventListener(), com o evento e o nome de uma função ou uma arrow function (função de seta) com os comandos a serem executados. Ex.:

    frm.addEventListener("submmit", (e) => { comandos })

## Propriedades innerText, innerHTML e value

innerText | Consulta ou altera o texto exibido por elementos HTML como parágrafoa (p), cabeçalhos (h1, h2...)  
 | ou containers (span, div). Códigos HTML presentes no conteúdo são renderizados pelo navegador.

---

innerHTML | Consulta ou altera o conteúdo de elementos HTML como parágrafos (p), cabeçalhos (h1, h2,...) ou containers (span, div)
| Códigos HTML presentes no conteúdo são renderizados pelo navegador.

---

## value | Consulta ou altera o conteúdo de campos de formulário

_Observações de segurança:_  
 A propriedade innerHTML pode apresentar algum risco relacionado à segurança na construção de páginas web em um tipo de ataque denominado XSS (Cross-Site Scripting). Essa vunerabilidade explora a exibição de dados contendo os códigos que poderiam ser enviados por usuários maliciosos.

_Como evitar esse problema?_
Filtrar os dados de entrada de um site. Caso o conteúdo a ser exibido na página pelo programa não contenha dados informados pelo usuário, não há riscos em utilizar o innerHTML.

## Novos termos

Objeto: Representa uma instância de uma classe.
Método: Representa uma instrução ou um conjunto de instruções que executam uma tarefa.
Propriedade: Representa uma característica (atributo) de um objeto.

## Operadores aritiméticos e funções matemáticas (página 52)
```javascript
const a = 5 % 2 // a = 1
const b = 7 % 4 // b = 3
```