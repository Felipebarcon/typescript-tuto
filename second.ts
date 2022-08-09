import Coordinates3d from './coordinates3d';
import { Coordinates, Dessinable } from './coordinates';
//**************************************** */
//**************************************** */
// Types Génériques

let a: Array<number>; // array de number
let b: number[];
a = b = [1, 2, 3];

// function return random number from array
function getRandomArry(arr: any[]): any {
  let a = Math.floor(Math.random() * arr.length);
  return arr[a];
}

console.log(getRandomArry([1, 'a', true]));

// Assume that the type of the parameter is unknown
function getRandomArryGen<T>(arr: T[]): T {
  let a = Math.floor(Math.random() * arr.length);
  return arr[a];
}

let arry: Dessinable[] = [new Coordinates3d(1, 2, 3), new Coordinates(8, 9)];

let arry2 = getRandomArryGen<Dessinable>(arry);

for (const dessin of arry) {
  dessin.dessine();
  // Tester si dessin est un objet de type Dessinable
  if (dessin instanceof Coordinates) {
    console.log('latitude:', dessin.lat, 'longitude :', dessin.lg);
  }
  if (dessin instanceof Coordinates3d) {
    console.log(
      'latitude:',
      dessin.lat,
      'longitude :',
      dessin.lg,
      'altitude :',
      dessin.alt
    );
  }
}

//**************************************** */
//**************************************** */
// Genercics classes

class Collection<T, U, D extends Dessinable> {
  u: U;
  dessin: D;
  population: T[] = [];

  constructor(u: U, dessin: D, ...population: T[]) {
    // ... utiliser pour récupérer les arguments optionnels passés en paramètre
    this.population = population; // population est un tableau de type T
    this.u = u;
    this.dessin = dessin;
  }

  getFirst(): T {
    this.dessin.dessine();
    return this.population[0];
  }
  getLast(): T {
    this.dessin.dessine();
    return this.population[this.population.length - 1];
  }

  add(element: T) {
    this.population.push(element);
  }
}

let coll = new Collection('toto', new Coordinates(2, 4), 3, 6, 7, 8, 9);
coll.add(12);
