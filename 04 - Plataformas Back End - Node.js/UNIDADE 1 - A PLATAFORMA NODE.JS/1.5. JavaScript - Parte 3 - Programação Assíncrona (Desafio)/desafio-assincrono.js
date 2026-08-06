const tempoInicial = Date.now();
function tempo() {
    const tempoFinal = Date.now();
    return `---> Tempo de execução: ${tempoFinal - tempoInicial}ms`;
}


setTimeout(() => console.log('A', eval('tempo()')), 0);
console.log('B', eval('tempo()'))
setTimeout(() => console.log('C', eval('tempo()')), 100);
setTimeout(() => console.log('D', eval('tempo()')), 0);

let i = 0;
while (i < 1000000000) {
    let ignore = Math.sqrt(i);
    i++;
}

console.log('E', eval('tempo()'))