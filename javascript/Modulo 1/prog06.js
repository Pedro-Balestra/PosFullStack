// Vetores

let frutas = ['maçã', 'banana', 'laranja'];

console.log(frutas);
console.log(`Primeira fruta: ${frutas[0]}`);
console.log(`Segunda fruta: ${frutas[1]}`);
console.log(`Terceira fruta: ${frutas[2]}`);
// Adicionando elementos no final
frutas.push('uva');
console.log(`Frutas após push: ${frutas}`);
// Removendo elementos do final
frutas.pop();
console.log(`Frutas após pop: ${frutas}`);
// Adicionando no início
frutas.unshift('morango');
console.log(`Frutas após unshift: ${frutas}`);
// Removendo o primeiro elemento
frutas.shift();
console.log(`Frutas após shift: ${frutas}`);
// Removendo elementos com splice
frutas.splice(1, 1);
console.log(`Frutas após splice: ${frutas}`);
// Adicionando elementos com splice
frutas.splice(1, 0, 'abacaxi', 'manga');
console.log(`Frutas após adicionar com splice: ${frutas}`);

frutas.sort();
console.log(`Frutas após sort: ${frutas}`);

frutas.sort((a,b) => {
    if(a>b) return -1;
    if(a<b) return 1;
    return 0;
});

console.log(`Compare Reverse: ${frutas}`);
// Juntando elementos com join
console.log(`Juntando elementos com join: ${frutas.join(':')}`);

