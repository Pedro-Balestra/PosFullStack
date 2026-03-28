// let ola = function (nome) {
//     console.log(`Ola ${nome}`);
// }('João'); // IIFE - Immediately Invoked Function Expression

// let ola2 = (function (nome) {
//     console.log(`Ola ${nome}`);
//     return `Ola ${nome}`;
// })('Maria'); // IIFE - Immediately Invoked Function Expression
// console.log(ola2);

//Biblioteca
let $ = (function () {
    let contadores = [];
    function Contador(i) {
        if (!contadores[i]) {
            contadores[i] = 0;
        }
        this.incrementar = function () {
            contadores[i]++;
            return this;
        }
        this.decrementar = function () {
            contadores[i]--;
            return this;
        }
        this.getValor = function () {
            return contadores[i];
        }
    }
    return function (i) {
        return new Contador(i);
    };
})();

let c = $(3);
c.incrementar().incrementar().incrementar().incrementar();
console.log(1, c.getValor());




