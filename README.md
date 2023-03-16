<br>

<a href=#><img src="/images/ban1.gif"></a>
<h1 align="center"> <strong>  JavaScript Notes📒 </strong> </h1> 



---

### Table of Contents

| No. | Questions                                                                                                                                                         |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [This Keyword ](#This-Keyword)
| 2   | [Regular functions ](#Regular-functions)  
| 3   | [Arrow functions ](#Arrow-functions) 
| 4   | [Rest patterns ](#Rest-patterns) 
| 5   | [Destructuring ](#Destructuring)
| 6   | [Maps](#Maps)
| 6   | [Maps](#Maps)

1. ### This Keyword

   **this keyword** refers to the current execution context or the current object. 

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
   

   
2. ### Regular function

   **A regular function** is a function that is defined using the function keyword. 

     ```javascript
    function greet(name) {
        console.log(Hello, ${name}!);
      }
      greet('TFK');          // "Hello, TFK!"
    ```
   
**[⬆ Back to Top](#table-of-contents)**
   
3. ###  Arrow function

   An **Arrow function** is a more concise syntax for defining a function. It is defined using the `=>` arrow operator, which is why it is called an arrow function. 


     ```javascript
    const double = (x) => {
        return x * 2;
      };
    ```
   
**[⬆ Back to Top](#table-of-contents)**

4. ### Rest patterns

   **Rest patterns** are a feature of the language that allow you to collect multiple function arguments into a single array. The rest pattern is denoted by three dots `...` 
 


     ```javascript
        function printArgs(...args) {
        console.log(args);
      }
      printArgs('T', 'F', 'K'); //['T', 'F', 'K']
      };
    ```
   
**[⬆ Back to Top](#table-of-contents)**

5. ### Destructuring

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

5. ### Maps

   Maps are a data structure in JavaScript that allow you to store key-value pairs. Unlike objects, which use strings as keys, maps can use any value as a key, including objects and functions.
 


     ```javascript
   const myMap = new Map();
   myMap.set('name', 'TFK');
   console.log(myMap.get('name')); //'TFK'
    ```
   
**[⬆ Back to Top](#table-of-contents)**

