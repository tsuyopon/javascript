// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index', {title:"Hello ect"});
//    res.render('pages/index');  // 引数を指定しない場合
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(80);
console.log('80 is the magic port');
