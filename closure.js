// ======================================================
// portée des variables
// ======================================================
function func() {
  function innerfunc() {
    console.log('coucou')
  }

  innerfunc();
}

// marche pas
innerfunc()

// marche car func appelle innerfunc
func();

// ======================================================
// portée des variables - 2
// la visibilité des variables ne dépend que de leur imbrication à l'écriture du code
// la visibilité des variables ne dépend pas du moment où est ecéxuté le code
// ======================================================
function func(p_message) {
  let message = p_message;
  function innerfunc() {
    console.log(message)
  }
  innerfunc();
}

// affiche coucou
func('coucou');


// ======================================================
// portée des variables - 3
// application classique : le pattern d'injection de dépendances
// permet de simuler une classe en garantissant la protection des variables
// ======================================================
function myWriterObj(prefixe) {
  function write(message) {
    console.log(prefixe + ' : ' + message)
  }
  function writeTwice(message) {
    console.log(prefixe + ' : ' + message)
    console.log(prefixe + ' : ' + message)
  }
  return {
    write,
    writeTwice
  }
}

// affiche coucou
let writer = myWriterObj('yoann');
// affiche "yoann : coucou"
writer.write('coucou')
// affiche "yoann : double coucou" 2 fois
writer.writeTwice('double coucou');


// ======================================================
// Closure
// ======================================================
