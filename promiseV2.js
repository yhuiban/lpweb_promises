
module.exports = function promise() {
  let thenChain = [];
  let i_func = 0;

  function then(func) {
    thenChain.push(function () {
      return func(resolve);
    });
    return interface;
  }

  function resolve(data) {
    let func = thenChain[i_func++];
    func && func(data);
    return data;
  }

  function done() {
    let func = thenChain[i_func++];
    func && func();
  }

  let interface =  {
    then,
    done
  };
  return interface;
}
