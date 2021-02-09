
/*
Simule partiellement le fonctionnement des promises de nodejs

Ne supporte pas la feature "multichain" du dernier paragraphe de cet article :
https://stackabuse.com/promises-in-node-js/ (juste avant conclusion)
On pourrait travailler dessus en différenciant:
- l'interface retournée par le then (qui cree une chaine)
- l'interface retournée par l'objet lui même

*/

module.exports = function promise(resolver) {
  let thenChain = [];

  // lancement du resolver à la creation de la promise
  resolver(runNextFunc);

  // la fonction then ne fait qu'ajouter des callback
  function then(func) {
    thenChain.push(func);
    return interface;
  }

  // runNextFunc lance la fonction suivante de la chaine
  function runNextFunc(data) {
    let result = null;
    let func = null;

    // on essaie de récupérer la fonction suivante
    if (thenChain.length) {
      func = thenChain.shift();
    }

    // s'il y a une fonction à faire tourner
    if (func) {
      result = func(data); // on execute la fonction

      // si le résultat contient le paramètre "thisIsAV3Promise", alors la fonction à executer est une promise
      // c'est cette nouvelle promise qui executera son "runNextFunc" pour fournir le résultat
      if (result && result.thisIsAV3Promise === true) {
        // pour que la chaine puisse continuer, on la confie à la nouvelle promise
        result.setThenChain(thenChain);
        // et on retire la chaine de la promise courante
        thenChain = [];
      } else {
        // simple fonction synchrone, on a son résultat définitif donc on passe à la fonction suivante
        runNextFunc(result);
      }
    }
  }

  function setThenChain(chain) {
    thenChain = chain.slice(); // copy array (without slice, this wuold be the same array)
  }

  let interface =  {
    thisIsAV3Promise: true,
    then,
    setThenChain
  };
  return interface;
};
