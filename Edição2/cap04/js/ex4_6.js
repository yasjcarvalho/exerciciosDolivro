//cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");


//"ouvinte" do evento, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => { //escuta evento submit do form
  e.preventDefault();                   // evita envio do form
  const saque = Number(frm.inSaque.value); //obtém valor do saque

  if (saque % 10 != 0) { //se o saque não é múltiplo de 10
    alert("Valor inválido para notas disponívei (R$ 10, 50, 100)")
    frm.inSaque.focus()
    return
  } 
});
