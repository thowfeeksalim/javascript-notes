function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName
};

const myFather = new Person("Salim", "PI");
console.log(`My father is ${myFather.name()} `);