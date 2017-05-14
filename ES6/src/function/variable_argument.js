function f(x, ...ys) {
    console.log(x, ys);
}
f(2, 3, 5);


function logArguments(...args) {
    for (let arg of args) {
        console.log(arg);
    }
}
logArguments("abc", "bcd", "cde", "def", "efg");
