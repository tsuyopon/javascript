// クロージャーを利用した２重に処理させないための関数のサンプル
// クロージャーの中ではisClicked変数は関数の外でも更新できていることに着目すること
function createClicked() {
  var isClicked = false;
  return function() {
    if (isClicked) {
      return 'すでにClickしています';
    }
    isClicked = true;
    return 'Clickしました';
  }
}

var click = createClicked();
console.log(click());  // Clickしました
console.log(click());  // すでにClickしています
