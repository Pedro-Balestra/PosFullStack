// function criaContador() {
//     let n = 0;
//     return function () {
//         n++;
//         console.log("Contador: " + n);
//     }
// }

// let contador1 = criaContador();
// contador1();
// contador1();
// contador1();

// function digaOla(idioma) {
//     return function (nome) {
//         switch (idioma) {
//             case 'en':
//                 console.log(`Hello, ${nome}!`);
//                 break;
//             case 'pt':
//                 console.log(`Olá, ${nome}!`);
//                 break;
//             case 'es':
//                 console.log(`Hola, ${nome}!`);
//                 break;
//             default:
//                 console.log(`Idioma não suportado: ${idioma}`);
//         }
//     }
// }

// let ola = digaOla('pt');

// ola('João');
// ola('Maria');

function criaContador() {
    let n = 0;
    function altera(v) {
        n += v;
    };
    return {
        incrementa: function () {
            altera(1);
            console.log("Contador: " + n);
        },
        decrementa: function () {
            altera(-1);
            console.log("Contador: " + n);
        },
        valor: function () {
            return n;
        }
    }
}

let contador1 = criaContador();
contador1.incrementa();
contador1.decrementa();
contador1.incrementa();
contador1.decrementa();
contador1.incrementa();
contador1.decrementa();
