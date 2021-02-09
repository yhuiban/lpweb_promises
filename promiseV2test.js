let promise = require('./promiseV2.js');

console.log('PROMISE: Create promise chain');

promise()

  .then(function (resolve) {
    console.log('PROMISE: Step 1');
    setTimeout(resolve, 1000);
  })

  .then(function (resolve) {
    console.log('PROMISE: Step 2');
    resolve('PROMISE: Step 2');
  })

  .then(function (resolve) {
    console.log('PROMISE: Step 3');
    setTimeout(resolve, 2000);
  })

  .then(function (resolve) {
    console.log('PROMISE: Step 4');
    resolve('PROMISE: Step 4');
  }).done();

