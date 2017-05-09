// HTTPにアクセスしてその結果に応じて処理を出し分けるサンプル
//  1. XMLHttpRequestの取得したレスポンスコードが200ならばresolve、それ以外のステータスコードやonerrorの場合にはrejectが呼ばれます。
//  2. resolveが呼ばれたらthenを呼び、rejectが呼ばれたらcatchが呼ばれます

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
