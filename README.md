<br>
<a href=#><img src="/images/ban1.gif"></a>
<h1  align="center"> <strong>  JavaScript Notes📒 </strong> </h1> 

---

### Table of Contents

| No. | Questions                                                                                                                                                         |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [Javascript ](#Javascript)
| 2   | [This Keyword ](#This-Keyword)
| 3   | [Regular functions ](#Regular-functions)  
| 4   | [Arrow functions ](#Arrow-functions) 
| 5   | [Rest patterns ](#Rest-patterns) 
| 6   | [Destructuring ](#Destructuring)
| 7   | [Maps](#Maps)
| 8   | [Prototype](#Prototype)
| 9   | [JSON](#JSON)
| 10  | [Closure](#Closure)
| 11  | [DOM](#DOM)
| 12  | [Data Types](#Data-Types)
| 13  | [Scope](#Scope)
| 14  | [Timer](#Timer)
| 15  | [Event loop](#Event-Loop)
| 16  | [Promise Object](#Promise-Object)

event loop



1. ### Javascript

   **Javascript** is a high-level, Object-oriented, multi-paradigm Programming language.
 

    ```javascript
   // the hello world program using console.log()
   console.log('Hello World'); 
    ```
**[⬆ Back to Top](#table-of-contents)**

2. ### This Keyword

   **This keyword** refers to the current execution context or the current object. 

    ```javascript
    const person = {
            name: 'TFK',
            sayHello: function() {
              console.log(Hello, my name is ${this.name} );
            }
          };
          person.sayHello();        //"Hello, my name is TFK" 
    ```
**[⬆ Back to Top](#table-of-contents)**

   
3. ### Regular function

   **Regular function** is a function that is defined using the function keyword. 

     ```javascript
    function greet(name) {
        console.log(Hello, ${name}!);
      }
      greet('TFK');          // "Hello, TFK!"
    ```
   
**[⬆ Back to Top](#table-of-contents)**
   
4. ###  Arrow function

   An **Arrow function** is a more concise syntax for defining a function. It is defined using the `=>` arrow operator, which is why it is called an arrow function. 


     ```javascript
    const double = (x) => {
        return x * 2;
      };
    ```
   
**[⬆ Back to Top](#table-of-contents)**

5. ### Rest patterns

   **Rest patterns** are a feature of the language that allow you to collect multiple function arguments into a single array. The rest pattern is denoted by three dots `...` 
 


     ```javascript
        function printArgs(...args) {
        console.log(args);
      }
      printArgs('T', 'F', 'K'); //['T', 'F', 'K']
      };
    ```
   
**[⬆ Back to Top](#table-of-contents)**

6. ### Destructuring

   Extract values from arrays and objects into separate variables using a concise syntax.
 


     ```javascript
   const person = {
       name: 'TFK',
       age: 21
    };
    const { name, age } = person;
    console.log(name); //'TFK'
    console.log(age); //21  
    ```

**[⬆ Back to Top](#table-of-contents)**

7. ### Maps

   Maps are a data structure in JavaScript that allow you to store key-value pairs. Unlike objects, which use strings as keys, maps can use any value as a key, including objects and functions.
 


     ```javascript
   const myMap = new Map();
   myMap.set('name', 'TFK');
   console.log(myMap.get('name')); //'TFK'
 
    ```

**[⬆ Back to Top](#table-of-contents)**

8. ### Prototype

   A prototype in JavaScript is a way of defining an object that serves as a blueprint for creating new objects.

     ```javascript
   function Person(first, last) {
   this.firstName = first;
   this.lastName = last;
   }

   Person.prototype.name = function() {
   return this.firstName + " " +    this.lastName
   };

   const myFather = new Person("Salim", "PI");
   console.log(`My father is ${myFather.name()} `);
   //My father is Salim PI 
    ```
   
**[⬆ Back to Top](#table-of-contents)**

9. ### JSON

   JSON stands for "JavaScript Object Notation". It is a lightweight and easy-to-read format used for transmitting data between web servers and web applications.


     ```javascript
   {"name":"John", "age":30, "car":null}
    ```
   
**[⬆ Back to Top](#table-of-contents)**

10. ### Closure

   A closure is a function having access to the parent scope, even after the parent function has closed.


     ```javascript
   const add = (function () {
   let counter = 0;
   return function () {counter += 1; return counter}
   })();

   add();
   add();
   // the counter is now 2
    ```
   
**[⬆ Back to Top](#table-of-contents)**

11. ### DOM

     Document object model is a structured representation of html documents.   Allows javascript to access html elements and styles to manipulate them.


<a href=#><img src="/images/DOM.jpg"></a>
    
   
**[⬆ Back to Top](#table-of-contents)**

12. ### Data Types

There are eight basic data types in JavaScript. They are:

   ```
         1. String: Represents textual data.

         2. Number: An integer or a floating-point number

         3. Bigint: An integer with arbitrary precision.

         4. Boolean: Any of two values: true or false.

         5. Undefined: A data type whose variable is not initialized.

         6. Null : Denotes a null value.

         7. Symbol : Data type whose instances are unique and immutable.

         8. Object : Key-value pairs of collection of data.
   ```
   
**[⬆ Back to Top](#table-of-contents)**

13. ### Scope

   Scope determines the accessibility (visibility) of variables.
   JavaScript has 3 types of scope:

   1. Block Scope:

      The block scope of a variable means   that the variable is accessible within the block
   ```javascript
      {
         let a = 5;
      }
   ```

2. Function Scope:

      The Function scope of a variable means   that the variable is accessible within the function.
   ```javascript
      function myFunction() {
         let carName = "Tesla";
      }
   ``` 

3. Global Scope:

      Variables declared Globally.

   ```javascript
      let a = 10; 
   ``` 
   
**[⬆ Back to Top](#table-of-contents)**

14. ### Timer

   The timer is used to delay the execution of the program or to execute the JavaScript code in a regular time interval. 
 
1. setTimeout()

The setTimeout() function helps the    users to delay the execution of code.
 ```javascript
 setTimeout(function, milliseconds)   
 ```
2. setInterval()

It executes the specified function repeatedly after a time interval.
 ```javascript
   setInterval(function, milliseconds)  
 ```
   
**[⬆ Back to Top](#table-of-contents)**

15. ### Event Loop

   The **Event Loop** is responsible for managing the execution of code in a non-blocking and asynchronous manner. 

The Event Loop has one simple job to monitor the Call Stack and the Callback Queue.If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it.


```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3'); //Output:   1  3  2
```

Here's a high-level overview of how the Event loop works in JavaScript:

1. When you execute your code, it gets added to a queue of tasks to be executed.
2. The event loop continuously monitors this queue for tasks that are ready to be executed.
3. When a task is ready, the event loop moves it from the queue to the call stack, where it is executed.

4. While a task is executing, other tasks can continue to be added to the queue.

5. When a task is complete, it is removed from the call stack, and the event loop checks the queue for the next task to execute.

**[⬆ Back to Top](#table-of-contents)**


16. ### Promise Object


Promises in JavaScript are a way to handle asynchronous operations, such as network requests or file I/O etc.
   The Promise object contains both the producing code and calls to the consuming code.


   ```javascript
   //Producing Code
   let myPromise = new Promise(function(myResolve, myReject) {
   myResolve(); // when successful
   myReject();  // when error
   });
   
   //Consuming Code
   myPromise.then(
   function(value) { /* code if successful */ },
   function(error) { /* code if some error */ }
);
   ```
   
**[⬆ Back to Top](#table-of-contents)**
