class Student {
  firstName;
  lastName;
  group;
  averageMark;
  constructor(
    firstName: string,
    lastName: string,
    group: string,
    averageMark: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.group = group;
    this.averageMark = averageMark;
  }
  getScholarship(): number {
    let scholarship: number = 100;

    if (this.averageMark == 5) {
      console.log(`Ваша стипендія як Студента - ${scholarship} Грн.`);
    } else {
      scholarship = 80;
      console.log(`Ваша стипендія як Студента - ${scholarship} Грн.`);
    }
    return scholarship;
  }
}
class Aspirant extends Student {
  student;
  scientificWork;
  constructor(
    firstName: string,
    lastName: string,
    group: string,
    averageMark: number,
    scientificWork: string
  ) {
    super(firstName, lastName, group, averageMark);

    this.scientificWork = scientificWork;
    this.student = student;
  }
  getScholarship() {
    let scholarship: number = 200;

    if (this.averageMark == 5) {
      console.log(`Ваша стипендія як Аспіранта - ${scholarship} Грн.`);
    } else {
      scholarship = 180;
      console.log(`Ваша стипендія як Аспіранта - ${scholarship} Грн.`);
    }
    return scholarship;
  }
}

let student = new Student("Roma", "Show", "25-ST", 4);
let aspirant = new Aspirant("Mike", "Thomson", "45-AS", 5, "Biology");

const arrOfPeople = [student, aspirant];
console.log(arrOfPeople[0].getScholarship(), arrOfPeople[1].getScholarship());
