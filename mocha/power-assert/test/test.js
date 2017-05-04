var assert = require("power-assert"); // assertモジュールのinclude

it ("assert test", function() {
	var author = "hoo";
	assert(author === 'hoo');
    //assert(author === 'hoge');  // ← 不一致エラー
});

it ("is assert.ok", function() {
    var hoge = 'foo';
    var fuga = 'foo';
    assert.ok(hoge === fuga, 'comment');
});

it ("is assert.deepEqual", function() {
    var ary1 = ['foo', 'bar', ['ccc', 'ccc2']];
    var ary2 = ['aaa', 'bbb', 'ccc'];
    assert.ok(ary1.length === ary2.length);  // これは通ってしまう
    assert.deepEqual(ary1, ary2);            // これは通らない
});
