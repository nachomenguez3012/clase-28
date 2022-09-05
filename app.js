const express = require('express');
const path = require('path');
const app = express();

const users = [];


app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded());

/************* RUTAS *******************/
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});
/************* FIN RUTAS *******************/

app.listen(process.env.PORT || 3030, () => {
    console.log("Levantando un servidor con Express en ", "http://localhost:3030");
});
