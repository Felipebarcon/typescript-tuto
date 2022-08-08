let i = 10;
const j = 100;
console.log(i + j, typeof i);
let s = 'salut';
console.log(s, typeof s);

let v: number; // console.log(v, typeof v, typeof v == 'undefined');

let w: number | string;

let z;
console.log(z, typeof z, typeof z == 'undefined'); // undefined. S'assurer d'assigner une valeur à une variable!!
let b: boolean;

let o = {};
console.log(o, typeof o, typeof o == 'object');

let oi = {
  x: 10,
};
console.log(oi.x, typeof oi.x, typeof oi.x == 'number', oi['x']);

// interface sert à determiner la nature d'un object
interface Point {
  x: number;
  y: number;
}
// obligation de donner une valeur à x et y, initialisation de p comme object.
let p: Point = { x: 12, y: 20 };
p.x = 14;
console.log(p, typeof p, typeof o == 'object');

type Animal = 'Singe' | 'Lion';
// Declaration
let a: Animal;
// Affectation
a = 'Singe';
console.log(typeof a);
