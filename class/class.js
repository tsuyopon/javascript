
// 親クラス
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}

// 子クラス
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    // 科目と学年は教師によって決まっている
    this.subject = subject;
    this.grade = grade;
  }
}

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting();              // Hi! I'm Severus.
snape.farewell();              // Severus has left the building. Bye for now.
console.log(snape.age);        // 58
console.log(snape.gender);     // male
console.log(snape.interests);  // ['Potions']
console.log(snape.subject);    // Dark arts
console.log(snape.grade);      // 5
