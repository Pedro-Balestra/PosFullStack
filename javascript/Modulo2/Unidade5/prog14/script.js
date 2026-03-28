// import { Circulo } from "./geometria.js";

// let c = new Circulo(10);
// console.log(`A area do circulo é ${c.area()}`);
// console.log(`O perimetro do circulo é ${c.perimetro()}`);

// import { contador, contar } from "./contador.js";

// console.log(`Contador: ${contador.valor}`);

// contador.valor = 3

// console.log(`Contador: ${contador.valor}`);


// for (let i = 0; i < 5; i++) {
//   console.log(`Contagem: ${contar()}`);
// }

// import { digaAdeus as adeus, digaOla as ola } from "./ola.js";

// ola("João");
// adeus("Maria");

import * as ola from "./ola.js";

// console.log(ola);
// ola.digaOla("João");
// ola.digaAdeus("Maria");

import usuario from "./usuario.js";

ola.digaOla(usuario.nome);
ola.digaAdeus(usuario.nome);