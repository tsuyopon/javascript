function* gfn(n){
    while(n < 100){
        yield n;
        n *= 2;
    }
}
var gen = gfn(3);
for(var v of gen) console.log(v);
