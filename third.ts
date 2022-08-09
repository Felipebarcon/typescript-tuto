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

// const autorises = ['felipe', 'pierre'];

// const nomsAutorises = (target: any, name: string) => {
//   let courant: string = target[name];

//   Object.defineProperty(target, name, {
//     set: (nouveau: string) => {
//       if (autorises.includes(nouveau)) {
//         courant = nouveau;
//         console.log('courant', courant, ', nouveau', nouveau);
//       } else return;
//     },
//     get: () => courant,
//   });
// };

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
        } else return;
      },
      get: () => courant.toUpperCase(),
    });
  };
};

class Bidon {
  @deco1(true) // utilisation du decorateur 1
  @deco2() // utilisation du decorateur 2
  test(): void {
    console.log('test est appelé');
  }

  @nomsAutorises('paul', 'henri', 'felipe')
  nom: string = 'felipe';
}

let b = new Bidon();
b.nom = 'alexis';
console.log(b.nom);
