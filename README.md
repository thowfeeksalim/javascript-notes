[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![pull][pull-requests-shield]][pull-requests-url]
[![Issues][issues-shield]][issues-url]
<a href="https://twitter.com/intent/follow?screen_name=thowfeeksalim6">
        <img src="https://img.shields.io/twitter/follow/thowfeeksalim6?style=social&logo=twitter"
            alt="follow on Twitter"></a>
<a href=#><img src="/16.gif"></a>

<br>
<h1 align="center"> <strong> JavaScript Interview Questions & Answers </strong> </h1> 




---

### Table of Contents

| No. | Questions                                                                                                                                                         |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [What is This Keyword in javascript](#what-is-This-Keyword-in-javascript)                                         |
| 2   | [What is prototype chain](#what-is-a-prototype-chain)                                                                                                           

1. ### What is This Keyword in javascript

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
   

   

 2. ### What is a prototype chain

      **this keyword** refers to the current execution context or the current object. 


      The prototype on object instance is available through **Object.getPrototypeOf(object)** or **\_\_proto__** property whereas prototype on constructors function is       available through **Object.prototype**.

    ![Screenshot](images/prototype_chain.png) 

   **[⬆ Back to Top](#table-of-contents)**




### Coding Exercise

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

 
   ## Disclaimer

   The questions provided in this repository are the summary of frequently asked questions across numerous companies. We cannot guarantee that these questions will actually be asked during your interview process, nor should you focus on memorizing all of them. The primary purpose is for you to get a sense of what some companies might ask — do not get discouraged if you don't know the answer to all of them ⁠— that is ok!

   Good luck with your interview 😊

