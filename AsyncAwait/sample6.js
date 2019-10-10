// Promise.allでも問題なくawaitが有効になることを確認する

function hello() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Hello '), 0);
  })
}

function world() {
  return new Promise(resolve => {
    setTimeout(() => resolve('world '), 0);
  })
}

function exclamation() {
  return new Promise(resolve => {
    setTimeout(() => resolve('!'), 0);
  })
}

(async () => {
  const result = await Promise.all([hello(), world(), exclamation()]);
  console.log(result); // [ 'Hello ', 'world ', '!' ]
})();
