// Promise.all()だとすべてのオブジェクトがresolveされたらthenに移ることを理解する


var Promise = require('es6-promise').Promise;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getURL(URL) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(new Error(req.statusText));
        };
        req.send();
    });
}
var request = {
        comment: function getComment() {
            return getURL('http://azu.github.io/promises-book/json/comment.json').then(JSON.parse);
        },
        people: function getPeople() {
            return getURL('http://azu.github.io/promises-book/json/people.json').then(JSON.parse);
        }
    };
function main() {
    // Promise.all()メソッドはPromiseオブジェクトの配列を受け取り、全てのPromiseオブジェクトがresolveされたタイミングでthenが呼び出されます。
    // この場合だとrequest.comment()とrequest.peopel()両方がresolveされたらthenが呼ばれます。
    return Promise.all([request.comment(), request.people()]);
}

main().then(function (value) {
    console.log(value);
}).catch(function(error){
    console.error(error);
});
