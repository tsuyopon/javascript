// server.js
// load the things we need
var express = require('express');
var app = express();

// ECTを使うための設定
var ECT = require('ect'); 
app.engine('ect', ECT({ watch: true, root: __dirname + '/views', ext: '.ect' }).render);
app.set('view engine', 'ect');


// use res.render to load up an ect view file

// index page (pages/index.ect)
app.get('/', function(req, res) {
    res.render('pages/index');
});

// パラメータ引き渡し(pages/test.ect)
app.get('/test', function(req, res) {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "this is tagline<tagline>";
    var flag = 1;

    res.render('pages/test', {
        drinks: drinks,
        tagline: tagline,
        flag: flag,
        v: {}
    });
});

app.listen(80);
console.log('80 is the magic port');
