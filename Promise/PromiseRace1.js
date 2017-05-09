// Promise.raceメソッドは、一つでも処理が完了されるとその時点で後続の処理を実行します。
var Promise = require('es6-promise').Promise;
Promise.race([
  new Promise(function(resolve, reject) {
    console.log('1');
    setTimeout(function() {
      console.log('1 done');
      resolve(1);
    }, 100);
  }),

  new Promise(function(resolve, reject) {
    console.log('2');
    setTimeout(function() {
      console.log('2 done');
      resolve(2);
    }, 50);
  }),

  new Promise(function(resolve, reject) {
    console.log('3');
    setTimeout(function() {
      console.log('3 done');
      resolve(3);
    }, 10);
  })
]).then(  // 上記で1つでもresolveになれば実行される
  function(results) {
    console.log('first done');
  },

  function(err) {
    console.log(err);
  }
);
