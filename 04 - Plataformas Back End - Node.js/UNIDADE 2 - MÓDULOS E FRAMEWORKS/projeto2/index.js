const express = require('express');
const app = express();

mid = (req, res) => {
    res.send('Hello World');
}

app.get('/', mid)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})