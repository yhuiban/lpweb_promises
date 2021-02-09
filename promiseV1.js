// promise V1
module.exports = function promise() {
  let thenChain = [];
  let i_func = 0;

  function then(func) {
    thenChain.push(func);
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

  return {
    then,
    resolve,
    done
  };
};

