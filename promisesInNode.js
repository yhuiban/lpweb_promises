// https://stackabuse.com/promises-in-node-js/

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

/*

promise.then(function(data) {
  // Register user
  console.log('Register user data: ' + JSON.stringify(data))
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve({account: 'blahblahblah'}), 1000);
  });
}).then(function(data) {
  // Auto login
  console.log('Auto login data: ' + JSON.stringify(data))
  return {session: 'sjhgssgsg16775vhg765'};
}).then(function(data) {
  // Present WhatsNew and some options
  console.log('Present WhatsNew and some options result: ' + JSON.stringify(data))
  return {whatsnew: {}, options: {}};
}).then(function(data) {
  console.log('the user Choices result: ' + JSON.stringify(data))
  // Remember the user Choices
  return {msg: 'All done'};
});
*/