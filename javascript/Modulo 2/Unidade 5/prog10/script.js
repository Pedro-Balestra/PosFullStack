function carga(n) {
    fetch('https://dummyjson.com/users/' + n)
        .then(response => {
            console.log(response);
            if (response.ok) {
                return response.json();
            }
        }).then((obj) => {
            console.log(obj);
            fetch(obj.image)
                .then(resp => resp.blob())
                .then(blob => {
                    imagem.src = URL.createObjectURL(blob);
                })
                .catch((erro) => console.log(erro));
        })
}

output.innerHTML = `
    <p>
      <input id="idUser" type="number" value="1" />
      <button id="btn">Ver avatar</button>
    </p>
    <p>
      <img id="imagem" width="150"/>
    </p>
  `;

btn.onclick = () => carga(idUser.value);
