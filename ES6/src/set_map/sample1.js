// Sets
console.log("Sets");
var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s.size === 2);
console.log(s.has("hello") === true);

// Maps
console.log("\n\nMaps");
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
console.log(m.get(s) == 34);
console.log(m);

// Weak Maps
console.log("\n\nWeakMap");
var wm = new WeakMap();
wm.set(s, { extra: 42 });
console.log(wm.size === undefined);
console.log(wm);

// Weak Sets
console.log("\n\nWeakSet");
var ws = new WeakSet();
ws.add({ data: 42 });
console.log(ws);
// Because the added object has no other references, it will not be held in the set
