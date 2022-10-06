class Person {
  fullName: string | undefined;
  age: number | undefined;


  constructor(fullName?: string, age?: number) {
    this.fullName = fullName;
    this.age = age;
  }

  talk() {
    console.log(`Такий то ${this.fullName} говорить`);
  }
  move() {
    console.log(`Його вік ${this.age} рочків`);
  }
}

const person = new Person("Mike", 5);
const nPerson = new Person();

person.talk();
person.move();
