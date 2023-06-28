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
            ou containers (span, div). Códigos HTML presentes no conteúdo são renderizados pelo navegador.
--------------------------------------------------------------------------------------------------------------            
innerHTML | Consulta ou altera o conteúdo de elementos HTML como parágrafos (p), cabeçalhos (h1, h2,...) ou containers (span, div)
            Códigos HTML presentes no conteúdo são renderizados pelo navegador.
------------------------------------------------------------------------------------------------------------------------------------
value     | Consulta ou altera o conteúdo de campos de formulário

*Observações:           

* 