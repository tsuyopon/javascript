// async/awaitをclass構文と合わせて使うサンプル
// 
// See: https://qiita.com/notsunohito/items/d8ef05f4444fd0d62d82
class Human {
  constructor(name) {
    this.name = name;
  }
  async sayHello() {
    return await this.asyncReturnSomething(`Hello! I'm ${this.name}!`)
  }
  asyncReturnSomething(something) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(something);
        }, 1000);
    });
  }
}

(async ()=> {
  const greeting = await new Human('John').sayHello();
  console.log(greeting);
  console.log('Done!');
})();
