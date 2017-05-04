// どのような値がboolean値としてtrue、falseとして扱われるのかを理解する

// false pattern
console.log("###### FALSE PATTERN ################");
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(false));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));

// true pattern
console.log("###### TRUE PATTERN ################");
console.log(Boolean(1789));
console.log(Boolean(-1));
console.log(Boolean('false'));
console.log(Boolean('0'));
console.log(Boolean(Math));
console.log(Boolean(Array()));
