const person = {
  name: 'John',
  greet: function(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
  }
};
const person2 = {
  name: 'Jane',
};

// Using call()
person.greet.call(person2, 'Hi');

// Using apply()
person.greet.apply(person2, ['Hey']);

// Using bind()
const greetBob = person.greet.bind({ name: 'Bob' }, 'Hi there');
greetBob();

/*Output:
Hi, my name is Jane
Hey, my name is Jane
Hi there, my name is Bob*/
