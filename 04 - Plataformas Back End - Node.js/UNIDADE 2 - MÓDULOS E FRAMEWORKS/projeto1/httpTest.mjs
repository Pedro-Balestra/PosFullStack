import http from 'http';
const server = http.createServer((req, res) => {
    if (req.method == "GET") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<form method="POST">Nome: <input type="text" name="nome"></form>`);
    }
    else {
        let str = ''
        req.on('data', function (chunk) { str += chunk; });
        req.on('end', function () {
            let nome = str.split('=')[1];
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(`{ "username": "${nome}" }`);
        });
    }
});
server.listen(3000, () => { console.log(` Servidor rodando`); });