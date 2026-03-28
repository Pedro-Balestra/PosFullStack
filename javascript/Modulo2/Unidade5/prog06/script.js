
//Içamento (Hoisting)
// fn();

// let a = 1;
// const b = 2;
// var c = 3;
// this.d = 4;

// function fn() {
//     console.log(this);
// }

// let pessoa = {
//     nome: 'João',
//     fn: function () {
//         console.log(this);
//     }
// }

// pessoa.fn(); // this aponta para o objeto pessoa

//função construtora
// function Pessoa(nome) {
//     this.nome = nome;
//     this.fn = function () {
//         console.log(this);
//     }
// }

// let p = new Pessoa('João');
// p.fn(); // this aponta para o objeto p
// class Pessoa {
//     constructor(nome) {
//         this.nome = nome;
//     }
//     fn() {
//         let self = this; // Armazenando a referência de 'this' em uma variável
//         let f = function () {
//             console.log(self); // Usando 'self' para acessar o contexto correto
//         };
//         f();
//     }
// }

// let p = new Pessoa('João');
// p.fn(); // this aponta para o objeto p
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    //função assíncrona
    fn(n) {
        let self = this; // Armazenando a referência de 'this' em uma variável
        setTimeout(function () {
            self.nome = n
            console.log(self); // Usando 'self' para acessar o contexto correto
        }, 1000);
    }
}

let p = new Pessoa('João');
p.fn('Maria'); // this aponta para o objeto p