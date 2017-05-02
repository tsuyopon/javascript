// HTTPにアクセスしてその結果に応じて処理を出し分けるサンプル

var Promise = require('es6-promise').Promise;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getURL(URL) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();    // nodejsで利用するにはxmlhttprequestパッケージが必要
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
var URL = "http://httpbin.org/get";
getURL(URL).then(function onFulfilled(value){
    console.log(value);
}).catch(function onRejected(error){
    console.error("!!!!!!!!!");
    console.error(error);
});
