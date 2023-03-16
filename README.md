# JavaScript Interview Questions & Answers

> Click :star:if you like the project and follow [@thowfeeksalim](https://twitter.com/thowfeeksalim) for more updates. Coding questions available [here](#coding-exercise). PDF and Epub versions available at [actions tab](https://github.com/thowfeeksalim/JavaScript-Interview-Questions/actions).




---

### Table of Contents

| No. | Questions                                                                                                                                                         |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [What is This Keyword in javascript](#what-is-This-Keyword-in-javascript)                                         |
| 2   | [What is prototype chain](#what-is-a-prototype-chain)                                                                                                             |

| 450 | [How to use await outside of async function prior to ES2022?](#how-to-use-await-outside-of-async-function-prior-to-es2022) | -->

1. ### What is This Keyword in javascript

   There are many ways to create objects in javascript as below

   <!-- 1. **Object constructor:**

      The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended. -->

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

   

 <!-- 2. ### What is a prototype chain

   **this keyword** refers to the current execution context or the current object. 


   The prototype on object instance is available through **Object.getPrototypeOf(object)** or **\_\_proto__** property whereas prototype on constructors function is available through **Object.prototype**.

    ![Screenshot](images/prototype_chain.png) 

   **[⬆ Back to Top](#table-of-contents)**



450. ### How to use await outside of async function prior to ES2022?
     Prior to ES2022, if you attempted to use an await outside of an async function resulted in a SyntaxError. 

     ```javascript
     await Promise.resolve(console.log('Hello await')); // SyntaxError: await is only valid in async function
     ```
     
     But you can fix this issue with an alternative IIFE (Immediately Invoked Function Expression) to get access to the feature.

     ```javascript
      (async function() {
        await Promise.resolve(console.log('Hello await')); // Hello await
      }());
     ```
 In ES2022, you can write top-level await without writing any hacks.
   
    ```javascript
    await Promise.resolve(console.log('Hello await')); //Hellow await
    ```

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

 #### 2. What is the output of below code

```javascript -->

<!-- 
## Disclaimer

The questions provided in this repository are the summary of frequently asked questions across numerous companies. We cannot guarantee that these questions will actually be asked during your interview process, nor should you focus on memorizing all of them. The primary purpose is for you to get a sense of what some companies might ask — do not get discouraged if you don't know the answer to all of them ⁠— that is ok!

Good luck with your interview 😊

--- -->
