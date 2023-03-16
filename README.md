<br>

<a href=#><img src="/images/ban1.gif"></a>
<h1 align="center"> <strong>  🤔JavaScript Interview Questions & Answers </strong> </h1> 



---

### Table of Contents

| No. | Questions                                                                                                                                                         |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [What is This Keyword ](#what-is-This-Keyword)                                         |
| 2   | [What is Regular functions ](#what-is-Regular-functions)  
| 3   | [What is Arrow functions ](#what-is-Arrow-functions) 
| 4   | [What is Rest patterns ](#what-is-Rest-patterns) 
| 5   | [What is Destructuring ](#what-is-Destructuring) 

1. ### What is This Keyword ?

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
   

   
2. ### What is Regular functions ?

   **A regular function** is a function that is defined using the function keyword. 

     ```javascript
    function greet(name) {
        console.log(Hello, ${name}!);
      }
      greet('TFK');          // "Hello, TFK!"
      
    ```
   
**[⬆ Back to Top](#table-of-contents)**
   
3. ### What is  Arrow function ?

   An **Arrow function** is a more concise syntax for defining a function. It is defined using the `=>` arrow operator, which is why it is called an arrow function. 


     ```javascript
    const double = (x) => {
        return x * 2;
      };
    
    ```
   
**[⬆ Back to Top](#table-of-contents)**

4. ### What is Rest patterns ?

   **Rest patterns** are a feature of the language that allow you to collect multiple function arguments into a single array. The rest pattern is denoted by three dots `...` 
 


     ```javascript
        function printArgs(...args) {
        console.log(args);
      }
      printArgs('T', 'F', 'K'); //['T', 'F', 'K']
      };
    
    ```
   
**[⬆ Back to Top](#table-of-contents)**

5. ### What is Destructuring ?

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


<!-- ### Coding Exercise

   #### 1. What is the output of below code

   ```javascript
   var car = new Vehicle("Honda", "white", "2010", "UK");
   console.log(car);

   function Vehicle(model, color, year, country) {
     this.model = model;
     this.color = color;
     this.year = year;
     this.country = country;
   }
   
   ```

   - 1: Undefined
   - 2: ReferenceError
   - 3: null
   - 4: {model: "Honda", color: "white", year: "2010", country: "UK"}

   <details><summary><b>Answer</b></summary>
   <p>

   ##### Answer: 4

   The function declarations are hoisted similar to any variables. So the placement for `Vehicle` function declaration doesn't make any difference.

   </p>
   </details>


  **[⬆ Back to Top](#table-of-contents)**
-->
 
   ## Disclaimer😄

   The questions provided in this repository are the summary of frequently asked questions across numerous companies. We cannot guarantee that these questions will actually be asked during your interview process, nor should you focus on memorizing all of them. The primary purpose is for you to get a sense of what some companies might ask — do not get discouraged if you don't know the answer to all of them ⁠— that is ok!

   Good luck with your interview 😊

