let numero = 7
fnMetade(numero).then(
    resultado => console.log(`A metade de ${numero} é ${resultado}`),
    erro => console.log(`Erro: ${erro}`)
)

function fnMetade(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve(num / 2);
        } else {
            reject('O número não é par');
        }
    });
}