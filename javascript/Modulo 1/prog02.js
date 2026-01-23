let v;
console.log(0,v,typeof v);

v = "Hello World!";
console.log(1,v, typeof v);

v = 42;
console.log(2,v, typeof v);

v = true;
console.log(3,v, typeof v);

v = null;
console.log(4,v, typeof v);

let nome = 'Pedro';
let mensagem =
`   <p>
        Olá ${nome}, seja bem-vindo!
    </p>
`;
console.log(5,mensagem, typeof mensagem);

let a = 3, b = 5;
console.log(6,`A soma de ${a} e ${b} é igual a ${a+b}`);

let lista = [1, 'texto', true, null, [10,20,30]];
console.log(7,lista, typeof lista);
console.log(8,'O segundo elemento da lista é:', lista[1]);
console.log(9,'O quinto elemento da lista é:', lista[4]);
console.log(10,'O terceiro elemento do quinto elemento da lista é:', lista[4][2]);

v = null;
console.log(11,v, typeof v);