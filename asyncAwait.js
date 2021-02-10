let sleep = function (millisec) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, millisec);
  });
};

// simple sequential code
async function main() {
  console.log('ASYNC: Step 1');
  try {
  result = await sleep(1000);
  } catch (error) {
    console.error("il y a une erreur", error);
  }
  console.log('ASYNC: Step 2');
  await sleep(2000);
  console.log('ASYNC: Step 3');
}
main();
