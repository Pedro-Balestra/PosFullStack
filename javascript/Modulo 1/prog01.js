let nome;
nome="Pedro"

console.log(1,nome);

let idade = 25;
console.log(idade);

{
    let nome2 = "Ana";
    console.log(2,nome2);
}

// console.log(nome2); // error

// var é global
{
    var nome3 = "Maria";
    console.log(3,nome3);
}

console.log(3,"var: " + nome3);

{
    const cpf = "123.456.789-00";
    console.log(4,cpf);
    // cpf = "111.222.333-44"; // error
}

// console.log(4,cpf); // error

