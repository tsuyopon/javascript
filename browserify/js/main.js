// main.js
var foo = require('./foo');
var bar = require('./bar');
var el = document.getElementById('box');
el.textContent = foo() + ' ' + bar();
