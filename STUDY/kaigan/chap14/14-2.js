// null値とundefined値を区別するためには==ではなく、===でなければならないことに注意する。
var myObject = null;
console.log(typeof myObject);          // 'object'
console.log(myObject === null);        // null === nullなので同等とみなされる
console.log(myObject == undefined);    // nullとundefinedは==だと同等とみなされる
console.log(myObject === undefined);   // nullとundefinedは===だと区別される
