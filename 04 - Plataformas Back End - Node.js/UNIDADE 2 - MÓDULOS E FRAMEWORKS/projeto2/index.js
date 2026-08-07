const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(new Date().toLocaleDateString(), req.method, req.path);
    next();
});

app.use(express.static('public'));

app.post('/users', (req, res) => {
    console.log(req.get('content-type'));
    dados = req.body;
    console.log(dados);
    res.send(`Dados recebidos com sucesso! Seja bem-vindo, ${dados.nome}!`);
});

// app.get('/users/:nome', (req, res) => {
//     const { nome } = req.params;
//     const { cidade } = req.query;
//     res.send(`Ola, ${nome}! Você é da cidade de ${cidade}.`);
// });

app.get('/users/site', (req, res) => {
    res.redirect('/site');
});


app.get('/dados', (req, res) => {

    console.log(req.get('accept'));

    // res.format({
    //     'text/html': () => {
    //         res.send('<h1>Olá</h1>');
    //     },
    //     'application/json': () => {
    //         res.json({ message: 'Olá' });
    //     }
    // });
    if (req.accepts('application/json')) {
        res.json({ message: 'Olá' });
    } else {
        res.send('<h1>Olá</h1>');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});