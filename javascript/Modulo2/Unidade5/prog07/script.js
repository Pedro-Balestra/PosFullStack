// let forma = {
//     x: 10,
//     y: 20
// }

// let retangulo = {
//     largura: 50,
//     altura: 100
// }
//Não é recomendado alterar o protótipo de um objeto, pois isso pode causar problemas de desempenho e segurança.
// retangulo.__proto__ = forma; // retangulo herda de forma

// forma.cor= 'vermelho'; // forma tem a propriedade cor, retangulo também herda essa propriedade

// console.log(forma);
// console.log(retangulo);
// console.log(retangulo.x, retangulo.y); // retangulo herda as propriedades x e y de forma
// console.log(retangulo.cor); // retangulo herda a propriedade cor de forma

// let retangulo = Object.create(forma);
// retangulo.largura = 50;
// retangulo.altura = 100;

// console.log(retangulo);

//Função construtora
// function Forma(x, y) {
//     this.x = x;
//     this.y = y;
// }

// function Cor(n) {
//     this.nome = n;
// }

// function Retangulo(x, y, l, a, n) {
//     Forma.call(this, x, y); // Chama o construtor da função Forma, passando o contexto atual (this) e os argumentos necessários
//     Cor.call(this, n);
//     this.largura = l;
//     this.altura = a;
// }

// Retangulo.prototype = Object.create(Forma.prototype); // Retangulo herda de Forma
// Retangulo.prototype.constructor = Retangulo; // Corrige a referência ao construtor

// let f1 = new Forma(10, 20);
// let r1 = new Retangulo(10, 20, 50, 100, 'Azul');

// Forma.prototype.mover = function (dx, dy) {
//     this.x += dx;
//     this.y += dy;
// }

// Forma.prototype.cor = 'vermelho';
// console.log(f1);
// f1.mover(5, 10);
// console.log(f1);
// console.log(f1.cor);
// console.log(r1);
// r1.mover(5, 10);

//Class
class Forma {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}


class Retangulo extends Forma {
    constructor(x, y, l, a) {
        super(x, y); // Chama o construtor da classe Forma, passando o contexto atual (this) e os argumentos necessários
        this.largura = l;
        this.altura = a;
    }
}

let r1 = new Retangulo(10, 20, 50, 100);

console.log(r1);
r1.move(5, 10);

