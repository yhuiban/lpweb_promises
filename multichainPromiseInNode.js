// from https://stackabuse.com/promises-in-node-js/


// demo multichain (non supporté par promiseV3)
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve({msg: 'To do some more job'}), 1000);
});

promise.then(function(result) {
  console.log('result 1:' + JSON.stringify(result));
  return {data: 'some data'};
})

  .then(function(result) {
    console.log('result 2:' + JSON.stringify(result));
    return {data: 'some other data'};
  });

promise.then(function(result) {
  console.log('result 3:' + JSON.stringify(result));
  return {data: 'some more data'};
});
