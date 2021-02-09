
let promise = require('./promiseV3.js');

let startTs = 0;
function formatResponse(msg) {
  let diff = Date.now() - startTs;
  return msg + '\t' + diff;
}

function testPromiseV3() {
  startTs = Date.now();
  console.log('PROMISE: Create promise chain');
  let step = 'Step 1';
  console.log(step + ' received data = ' + formatResponse('rien'));

  promise(function resolver(resolve) {
    setTimeout(function() {
      return resolve(formatResponse(step));
    }, 1000);
  })

    .then(function step2(data) {
      let step = 'Step 2';
      console.log(step + ' received data = ' + data);
      return formatResponse(step);
    })

    .then(function step3(data) {
      let step = 'Step 3';
      console.log(step + ' received data = ' + data);
      return promise(function (resolve) {
        setTimeout(function() {
          return resolve(formatResponse(step));
        }, 2000);
      });
    })

    .then(function step4(data) {
      let step = 'Step 4';
      console.log(step + ' received data = ' + data);
      return formatResponse(step);
    })

    .then(function step5(data) {
      let step = 'Step 5';
      console.log(step + ' received data = ' + data);
      return formatResponse(step);
    });
}

function testNodePromise() {
  startTs = Date.now();
  console.log('PROMISE: Create promise chain');


  let step = 'Step 1';
  console.log(step + ' received data = ' + formatResponse('rien'));
  new Promise(function resolver(resolve) {
    setTimeout(function() {
      resolve(formatResponse(step));
    }, 1000);
  })

    .then(function step2(data) {
      let step = 'Step 2';
      console.log(step + ' received data = ' + data);
      return formatResponse(step);
    })

    .then(function step3(data) {
      let step = 'Step 3';
      console.log(step + ' received data = ' + data);
      return new Promise(function (resolve) {
        setTimeout(function() {
          resolve(formatResponse(step));
        }, 2000);
      });
    })

    .then(function step4(data) {
      let step = 'Step 4';
      console.log(step + ' received data = ' + data);
      return formatResponse(step);
    })

    .then(function step5(data) {
      let step = 'Step 5';
      console.log(step + ' received data = ' + data);
      return formatResponse(step);
    });
}

setTimeout(testPromiseV3, 0);
setTimeout(testNodePromise, 5000);


