// https://www.youtube.com/watch?v=vuVs7MypC8Y

const express = require('express');
const favicon = require('express-favicon'); //look this up
const { dirname } = require('path');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico')); //is this needed?
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res){
    return res.send('pong');
});
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);