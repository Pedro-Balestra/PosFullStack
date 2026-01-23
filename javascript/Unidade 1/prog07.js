// Objetos
let musica = {};
musica.titulo = 'Imagine';
musica.artista = 'John Lennon';
musica.ano = 1971;
musica.duracao = 183; // em segundos

console.log(musica);
console.log(`Título: ${musica.titulo}`);
console.log(`Artista: ${musica.artista}`);
console.log(`Ano: ${musica.ano}`);
console.log(`Duração: ${musica.duracao} segundos`);

// let usuario = {
//     nome: 'Pedro',
//     idade: 25
// }

// if('nome' in usuario) {
//     console.log(`Nome do usuário if: ${usuario.nome}`);
// }

// for(let chave in usuario) {
//     console.log(`Chave: ${chave}, Valor: ${usuario[chave]}`);
// }

// let pedro = {
//     nome: 'Pedro',
//     idade: 25,
// }

// let ana = pedro; // Referência ao mesmo objeto
// ana.nome = 'Ana';

// function mudarNome(obj) {
//     obj.nome = 'Elise';
// }

// mudarNome(pedro);

// Clonagem de objetos
// let ana ={};
// for(let chave in pedro) {
//     ana[chave] = pedro[chave];
// }
// ana.nome = 'Ana';
// ana.sobrenome = 'Juvencio';

// console.log(pedro);
// console.log(ana);

// Função para criar objetos

// Função construtora - Constructor function
function Usuario(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.maiorDeIdade = idade >= 18;
}

function criarUsuario(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        maiorDeIdade: idade >= 18
    };
}
class User{
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    maiorDeIdade() {
        return this.idade >= 18;
    }
}

let pedro = criarUsuario('Pedro', 25);
let elise = new Usuario('Elise', 2);
let ana = new User('Ana', 25);

console.log(pedro);
console.log(elise);
console.log(ana);


