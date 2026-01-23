function message(nome) {
    console.log(`Olá, ${nome}`);
}
message('Pedro');

// function soma(a, b) {
//     return a + b;
// }

// console.log('Resultado: ' + soma(3, 4));


// Expressão de função
// let multiplicacao = function(a, b) {
//     return a * b;
// }

// console.log(`Multiplicação: ${multiplicacao(3, 4)}`);

// Exemplo
let soma = function(a, b) {
    return a + b;
}
let subtracao = function(a, b) {
    return a - b;
}
let multiplicacao = function(a, b) {
    return a * b;
}
let divisao = function(a, b) {
    return a / b;
}

let operacao = function(a, b, func) {
    return func(a, b);
}

console.log(`Operação soma: ${operacao(3, 4, soma)}`);
console.log(`Operação subtração: ${operacao(3, 4, subtracao)}`);
console.log(`Operação multiplicação: ${operacao(3, 4, multiplicacao)}`);
console.log(`Operação divisão: ${operacao(3, 4, divisao)}`);

// Expressão de função nomeada
let fatorial = function fat(n) {
    if(n <= 1)
        return 1;
    return n * fat(n - 1);
}

console.log(`Fatorial: ${fatorial(5)}`);

// Arrow function
let potencia = (base, expoente) => {
    return Math.pow(base, expoente);
}

console.log(`Potência: ${potencia(2, 3)}`);


