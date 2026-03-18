output.innerHTML = '';

let a
let x = -10;
try {
    if (x < 0) throw new TypeError('Valor de x não pode ser negativo');
    a = x
    output.innerHTML = `Valor de a: ${a}`;
} catch (error) {
    output.innerHTML = `Ocorreu um erro: ${error.message}`;
} finally {
    console.log('Bloco finally executado');
    console.log('fim');
}


