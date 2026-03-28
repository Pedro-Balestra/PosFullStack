// let obj1 = { nome: 'João', idade: 30 };
// let obj2 = obj1;
// let clone1 = { ...obj1 };

// obj1.nome = 'Maria';
// console.log(clone1.nome);
// console.log(obj1.nome);

// let matricula = { matricula: '12345', curso: 'Engenharia' };
// let aluno = { ...obj1, ...matricula };
// console.log(aluno);

// let funcionario = { ...obj1, salario: 5000 };
// console.log(funcionario);

// function soma() {
//     let valores = [...arguments];
//     console.log(valores);

//     return valores.reduce((acumulador, valor) => acumulador + valor, 0);
// }

// console.log(soma(1, 2, 3, 4));

// let nomeCompleto = "Jose Couves";
// console.log(nomeCompleto);

// let pessoa = {};
// [pessoa.prenome, pessoa.sobrenome] = nomeCompleto.split(' ');
// console.log(pessoa);
// console.log(pessoa.prenome);
// console.log(pessoa.sobrenome);

// let pessoa = { nome: 'João', idade: 30 };

// for(let [chave, valor] of Object.entries(pessoa)) {
//     console.log(`${chave}: ${valor}`);
// }

let numeros = [1, 2, 3, 4, 5];
let [primeiro, segundo, ...resto] = numeros;
console.log(primeiro);
console.log(segundo);
console.log(resto);