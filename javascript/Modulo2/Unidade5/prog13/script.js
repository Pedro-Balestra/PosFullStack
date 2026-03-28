output.innerHTML = `
    <p>
      <input id="nome" type="text"  />
      <button id="btn">Ok</button>
    </p>
    <p id="result"></p>
  `;

btn.onclick = () => {
    let hoje = new Date();
    let horas = hoje.getHours();
    let mensagem = "";
    if (horas < 12) mensagem += "Bom dia, ";
    else if (horas < 18) mensagem += "Boa tarde, ";
    else mensagem += "Boa noite, ";
    mensagem += getNome();
    result.innerText = mensagem;
}

function getNome() {
    return nome.value || "visitante";
}