//*********************************************** */
//*********************************************** */
// Decorator
function deco1(appel: boolean) {
  console.log('factory de deco 1 appelée');
  // Function de décorateur appellée dans l'ordre inverse
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('deco 1 a été appelé', target, propertyKey);
    if (appel) {
      descriptor.value();
    }
  };
}

const deco2 = (appel: boolean = true) => {
  return (target: any, propertyKey: string) => {
    if (appel) {
      console.log('deco 2 a été appelé par', propertyKey);
    }
  };
};

/**
 *  - Valide la propriété avec une liste de noms autorisés ou custom
 *  - Récupère la valeur de la propriété
 *  - Si la valeur est dans la liste, la garde
 *  - Si la valeur n'est pas dans la liste, la supprime
 *    @param autorises - liste de valeurs autorisées
 */
const nomsAutorises = (...autorises: string[]) => {
  if (autorises.length == 0) {
    autorises.push('felipe', 'pierre');
  }
  // const autorises = ['felipe', 'pierre'];
  return (target: any, name: string) => {
    let courant: string = target[name];

    Object.defineProperty(target, name, {
      set: (nouveau: string) => {
        if (autorises.includes(nouveau)) {
          courant = nouveau;
          console.log('courant', courant, ', nouveau', nouveau);
        } else throw nouveau + " n'est pas autorisé";
      },
      get: () => courant.toUpperCase(),
    });
  };
};

class Bidon {
  /**
   * Classe Bidon
   * @param bidon - paramètre de la classe
   *
   * @author Felipe
   * @beta
   */

  constructor(bidon: string = '') {}

  @deco1(true) // utilisation du decorateur 1
  @deco2() // utilisation du decorateur 2
  test(): void {
    console.log('test est appelé');
  }

  @nomsAutorises('paul', 'henri', 'felipe')
  nom: string = 'felipe';
}

try {
  const bidon = new Bidon();
  bidon.test();
  bidon.nom = 'alexis';
  console.log(bidon.nom);
} catch (error) {
  console.error(error);
}

console.log('---------------suite-------------');

//*********************************************** */
//*********************************************** */
// Function for exception

class DivisionError extends Error {
  constructor() {
    super('division impossible par 0');
  }
}

class ArrayError extends Error {
  constructor() {
    super('Tableau vide.... sans doute');
  }
}

function division(a: number, ...b: number[]) {
  if (b.length == 0) {
    throw new ArrayError();
  }

  if (b[0] === 0) {
    // throw new Error('Division par 0 pas autorisée');
    throw new DivisionError();
  }
  return a / b[0];
}

try {
  console.log(division(1, 1));
} catch (error: any) {
  if (error instanceof DivisionError) {
    console.error('Apprend à calculer: ', error.message);
  }
} finally {
  console.log('---------------fin de division-------------');
}

try {
  console.log(division(1));
  console.log('---------------fin de division-------------');
} catch (error: any) {
  if (error instanceof DivisionError) {
    console.error('Apprend à calculer: ', error.message);
  } else {
    if (error instanceof ArrayError) {
      console.error('On doit diviser par quelque chose: ', error.message);
    }
  }
} finally {
  console.log('---------------fin de division-------------');
}
