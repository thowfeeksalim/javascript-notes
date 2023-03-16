function Person(age) {
  this.age = age;
}
const myFather = new Person(50);
const myMother = new Person(47);

console.log(`My father is ${myFather.age} and My mother is ${myMother.age}. `);