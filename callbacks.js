
// callback
console.log('CALLBACK: Step 1');
setTimeout(function callback(error, data) {
  console.log('CALLBACK: Step 2');
  setTimeout(function callback(error, data) {
    console.log('CALLBACK: Step 3');
  }, 2000);
}, 1000);
