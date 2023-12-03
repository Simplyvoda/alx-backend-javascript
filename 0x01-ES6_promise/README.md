ES6 Promises :smiley
============

This repository contains examples and explanations of ES6 Promises and their various methods, aimed at understanding asynchronous JavaScript operations using Promises.

Prototypes
----------

Prototypes in JavaScript allow objects to inherit properties and methods from other objects. They are the mechanism by which JavaScript objects inherit features from one another.

```
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, ${this.name}!`;
};

const person = new Person('Alice');
console.log(person.greet()); // Output: Hello, Alice!
```

Prototypes serve as a blueprint for JavaScript objects, enabling shared properties and methods among instances.

Promise
-------

A Promise in JavaScript represents the eventual completion or failure of an asynchronous operation and its resulting value.

```
const myPromise = new Promise((resolve, reject) => {
  // Perform some asynchronous operation
  const success = true;

  if (success) {
    resolve('Operation successful');
  } else {
    reject('Operation failed');
  }
});

myPromise
  .then((result) => {
    console.log(result); // Output: Operation successful
  })
  .catch((error) => {
    console.error(error);
  });
```

Promises offer a clean way to handle asynchronous operations by chaining `.then()` to handle success and `.catch()` to catch errors.

Promise.all
-----------

`Promise.all` is a method that takes an iterable of Promises as input and returns a single Promise that resolves when all of the input Promises have resolved or rejects when any of the input Promises reject.

```
const promise1 = Promise.resolve('One');
const promise2 = Promise.resolve('Two');
const promise3 = Promise.resolve('Three');

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // Output: ['One', 'Two', 'Three']
  })
  .catch((error) => {
    console.error(error);
  });
```

`Promise.all` is useful when you want to perform multiple asynchronous operations simultaneously and wait for all of them to complete.

Promise.allSettled
------------------

`Promise.allSettled` is a method that takes an iterable of Promises as input and returns a Promise that resolves after all the input Promises have settled (either resolved or rejected), providing an array of results for each Promise.

```
const promise1 = Promise.resolve('One');
const promise2 = Promise.reject('Rejected');
const promise3 = Promise.resolve('Three');

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
    /*
      Output:
      [
        { status: 'fulfilled', value: 'One' },
        { status: 'rejected', reason: 'Rejected' },
        { status: 'fulfilled', value: 'Three' }
      ]
    */
  });
```

`Promise.allSettled` allows you to handle multiple Promises and track their individual statuses regardless of success or failure.

Promise.resolve
---------------

`Promise.resolve` is a method that returns a Promise object that is resolved with a given value.

```
const resolvedPromise = Promise.resolve('Resolved value');

resolvedPromise
  .then((value) => {
    console.log(value); // Output: Resolved value
  });
``

`Promise.resolve` is useful for creating a Promise that is already resolved with a specific value.

Promise.reject
--------------

`Promise.reject` is a method that returns a Promise object that is rejected with a given reason.

```
const rejectedPromise = Promise.reject('Reason for rejection');

rejectedPromise
  .catch((reason) => {
    console.error(reason); // Output: Reason for rejection
  });
```

`Promise.reject` is handy for creating a Promise that is already rejected with a specified reason.

Promise.race
------------

`Promise.race` is a method that takes an iterable of Promises as input and returns a Promise that resolves or rejects as soon as one of the input Promises resolves or rejects, with the value or reason from that Promise.

```
const promiseA = new Promise((resolve) => setTimeout(resolve, 100, 'A'));
const promiseB = new Promise((resolve) => setTimeout(resolve, 200, 'B'));

Promise.race([promiseA, promiseB])
  .then((value) => {
    console.log(value); // Output: A (since it resolves first)
  });
```

`Promise.race` is useful when you want to respond as soon as the first Promise among a set of Promises resolves or rejects.

try...catch and finally
-----------------------

The `try...catch` statement is used to handle exceptions in JavaScript. Code that might throw an error is placed in the `try` block, and if an error occurs, it's caught and handled in the `catch` block. The `finally` block is executed regardless of whether an error occurred.

```
function divide(x, y) {
  try {
    if (y === 0) {
      throw new Error('Division by zero');
    } else {
      return x / y;
    }
  } catch (error) {
    console.error(error.message); // Output: Division by zero
  } finally {
    console.log('Operation complete'); // Output: Operation complete
  }
}

divide(10, 0); // Output: Division by zero, Operation complete
```

The `finally` block is often used for cleanup tasks that need to be performed whether an error occurred or not.