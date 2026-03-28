import translate from 'translate';
import { v4 as uuidv4 } from 'uuid';


output.innerHTML = `<p>Gerando um UUID: ${uuidv4()}</p>`;

translate.engine = 'google';
translate.from = 'pt';
translate.to = 'en';

output2.innerHTML = `
<p>
    <input id="original" type="text"/>
    <button id="btnTraduzir">Traduzir</button>
</p>
<p id="traducao"></p>
`;


btnTraduzir.onclick = () => {
    translate(original.value)
        .then(resultado => {
            traducao.innerText = resultado;
        })
        .catch(erro => {
            traducao.innerText = `Erro: ${erro.message}`;
        });
};