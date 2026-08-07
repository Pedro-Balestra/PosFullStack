const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(new Date().toLocaleDateString(), req.method, req.path);
    next();
});

app.use(express.static('public'));

app.post('/users', (req, res) => {
    dados = req.body;
    console.log(dados);
    res.send(`Dados recebidos com sucesso! Seja bem-vindo, ${dados.nome}!`);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});