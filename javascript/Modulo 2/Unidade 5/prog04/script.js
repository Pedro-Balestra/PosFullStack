// let funcionario = {
//     nome: 'João',
//     sobrenome: 'Silva',
//     salario: 5000,
//     get nomeCompleto() {
//         return `${this.nome} ${this.sobrenome}`;
//     },
//     set nomeCompleto(nc) {
//         [this.nome, this.sobrenome] = nc.split(' ');
//     }
// }

// funcionario.nomeCompleto = 'Maria Souza';
// console.log(funcionario);

let funcionario = {
    nome: 'João',
    sobrenome: 'Silva',
    salario: 5000,
    nascimento: new Date('1990-01-01'),
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },
    set novoSalario(v) {
        if (v < this.salario) {
            throw new Error('O novo salário deve ser maior que o salário atual');
        } else {
            this.salario = v;
        }
    },
    get idade() {
        let ano = new Date().getFullYear() - this.nascimento.getFullYear();
        return ano;
    }
}

funcionario.novoSalario = 6000;
console.log(funcionario);
console.log(funcionario.idade);
