let promise = require('./promiseV1.js');

console.log('PROMISE: Create promise chain');
let p = promise();

p.then(function (data) {
  console.log('PROMISE: Step 1');
  setTimeout(p.resolve, 1000);
});
p.then(function (data) {
  console.log('PROMISE: Step 2');
  setTimeout(p.resolve, 2000);
});
p.then(function (data) {
  console.log('PROMISE: Step 3');
  p.resolve(data);
});
p.then(function (data) {
  console.log('PROMISE: Step 4');
  data = data + '\nPROMISE: Step 4'
  p.resolve(data);
});
p.done();
