let idade = 21;
// let acessoPermitido;
// if(idade >= 18) acessoPermitido = true;
// else acessoPermitido = false;

let acessoPermitido = idade >= 18 ? true : false;

console.log(acessoPermitido);


let a = 2, b = 1 , operador = '+';
/*======================== IF ELSE ========================*/
if(operador === '+')
    console.log('if', a + b);
else if(operador === '-')
    console.log('if', a - b);
else if(operador === '*')
    console.log('if', a * b);
else if(operador === '/')
    console.log('if', a / b);
else
    console.log('Operador inválido');

/*======================== SWITCH ========================*/
switch(operador) {
    case '+':
        console.log('switch', a + b);
        break;
    case '-':
        console.log('switch', a - b);
        break;
    case '*':
        console.log('switch', a * b);
        break;
    case '/':
        console.log('switch', a / b);
        break;
    default:
        console.log('Operador inválido');
}

/*======================== WHILE ========================*/
let i = 0;
while(i < 5) {
    console.log('while', i);
    i++;
}

/*======================== DO WHILE ========================*/
i = 0;
do {
    console.log('do while', i);
    i++;
} while(i < 5);

/*======================== FOR ========================*/
for(let j = 0; j < 5; j++) {
    console.log('for', j);
}

/*======================== FOR...OF ========================*/
let linguagem = 'JavaScript';
for(let char of linguagem) {
    console.log('for...of', char);
}
/*======================== FOR...IN ========================*/
let pessoa = {
    nome: 'Pedro',
    idade: 25,
    profissao: 'Desenvolvedor'
};
for(let chave in pessoa) {
    console.log('for...in', chave, pessoa[chave]);
}

/*======================== BREAK E CONTINUE ========================*/
for(let k = 0; k < 10; k++) {
    if(k === 5) {
        console.log('break', k);
        break;
    }
    console.log('continue', k);
}