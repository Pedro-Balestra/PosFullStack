const { Resolver } = require('dns');
const resolver = new Resolver();

// Define o servidor a ser utilizado
resolver.setServers(['8.8.8.8']);

// Realiza a tradução de um nome de domínio para um endereço IP
resolver.resolve4('pucminas.br', (err, addresses) => {
    if (err)
        console.log(`Erro ao traduzir: ${err.message}`);
    else
        console.log('Endereço IP: ' + addresses[0]);
});