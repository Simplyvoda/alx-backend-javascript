ES6 Basics Concepts 😄
----------------------

### 1\. ES6 Syntax

ES6, also known as ECMAScript 2015, introduced several new features and syntax improvements to JavaScript. It brought enhancements like `let`, `const`, arrow functions, template literals, and more to make JavaScript code cleaner and more expressive.

### 2\. Rest and Spread Operators

-   Rest Operator (`...`): Allows the gathering of remaining parameters into an array in function definitions.
-   Spread Operator (`...`): Expands arrays and objects into individual elements. It's used in function calls, array literals, and object literals.

### 3\. Arrow Functions

Arrow functions provide a concise syntax for writing function expressions. They have a more compact syntax compared to traditional function expressions and also handle `this` in a different way, using lexical scoping.

### 4\. Difference Between `let`, `var`, and `const`

-   `let`: Declares a block-scoped variable. It allows reassigning values but does not permit re-declaration in the same scope.
-   `const`: Declares a block-scoped constant variable. It does not allow reassignment or redeclaration.
-   `var`: Declares a variable with function-scoped or globally scoped variables. It allows hoisting and doesn't have block scope, which can lead to unexpected behavior. It's strongly discouraged due to its behavior in certain scenarios.

### 5\. Default Parameters

Default parameters allow functions to have parameters with default values, which are used when the corresponding argument is not passed into the function or is `undefined`.

### 6\. Conditional Properties

Conditional properties refer to the ability to conditionally add properties to an object using JavaScript object property shorthand. This allows properties to be included in an object literal only if a certain condition is met.

### 7\. Method Properties

Method properties use a shorthand syntax to define functions as object properties without using the `function` keyword. Here's an example:

`const myObject = {
  // ES6 method property syntax
  myMethod() {
    // Method logic here
    console.log('This is a method using ES6 syntax.');
  }
};`

### 8\. Iterables and Iterators

-   Iterables: Objects that implement the iterable protocol, allowing them to be iterated over using loops or other iterable methods. Arrays and strings are examples of built-in iterables.
-   Iterators: Objects that implement the iterator protocol, providing a `next()` method that returns an object with `value` and `done` properties. Iterators are used to iterate over iterables.

Example of using iterators with a custom iterable object:

`const iterableObject = {
  [Symbol.iterator]() {
    let index = 0;
    const data = [1, 2, 3, 4];
    return {
      next() {
        return index < data.length ?
          { value: data[index++], done: false } :
          { done: true };
      }
    };
  }
};
for (const item of iterableObject) {
  console.log(item); // Outputs: 1, 2, 3, 4
}`
