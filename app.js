const express = require('express')
const app = express()

app.get('/gen/:pass', (req, res) => {
    res.send(`Hello ${req.params.pass}`)
});

const port = process.env.port  || 3000;

app.listen(port, ()=> console.log(`Listening on port ${port}...`));