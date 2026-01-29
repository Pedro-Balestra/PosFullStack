onmessage = function(e) {
    let soma = e.data[0]+e.data[1];
    postMessage(soma);
}