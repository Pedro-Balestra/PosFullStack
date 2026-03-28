// let num = 50
// let fn = fnMetade(num)
// fn.then(
//     resultado => console.log(`A metade de ${num} é ${resultado}`),
// ).catch(erro => console.log(`Erro: ${erro.message}`))

// async function fnMetade(num) {
//     if (num % 2 == 0) {
//         return num / 2;
//     } else {
//         throw new Error('O número não é par');
//     }
// }

async function carga(n) {
    let resp1 = await fetch('https://dummyjson.com/users/' + n);
    let user = await resp1.json();
    let resp2 = await fetch(user.image);
    let blob = await resp2.blob();
    imagem.src = URL.createObjectURL(blob);
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
