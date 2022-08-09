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

class Bidon {
  @deco1(true) // utilisation du decorateur 1
  @deco2() // utilisation du decorateur 2
  test(): void {
    console.log('test est appelé');
  }
}
