const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const produto = frm.inProduto.value

    // se houver dados salvos
    if (localStorage.getItem("comprasProduto")){
        // obtém itens separando-os em elementos de vetor
        const produtos = localStorage.getItem("comprasProdutos").split(";")

        //adiciona o novo produto ao vetor
        produtos.push(produto)

        // classifica o vetor
        produtos.sort()

        // salva vetor classificado (com elementos separados por "")
        localStorage.setItem("comprasProduto", produtos.join(";"))
    } else {
        // senão (é a primeira inclusão), salva apenas o produto
        localStorage.setItem("comprasProduto", produto)
    }

    listarProdutos()

    frm.reset() // ou frm.inProduto.value = ""
    frm.inProduto.focus()
})

const listarProdutos = () => {
    if(!localStorage.getItem('comprasProduto')){
        resp.innetText = ''
        return
    }
    const produtos = localStorage.getItem("comprasProduto").split(";")

    resp.innetText = `Produtos Adicionados\n-----------------------\n${produtos.join("\n")}`
    
}