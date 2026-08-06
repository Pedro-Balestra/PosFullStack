const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    console.log(new Date().toLocaleDateString(), req.method, req.path);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});