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
  y: 20,
  z: 30,
};
console.log(oi.x, typeof oi.x, typeof oi.x == 'number', oi['x']);

// interface sert à determiner la nature d'un object
interface Point {
  x: number;
  y: number;
}
// obligation de donner une valeur à x et y, initialisation de p comme object.
let p: Point = { x: 12, y: 20 };
console.log(p, typeof p, typeof o == 'object');

type Animal = 'Singe' | 'Lion';
// Declaration
let a: Animal;
// Affectation
a = 'Singe';
console.log(typeof a);

enum Jour {
  Lundi = 1.5,
  Mardi = 2.1,
  Mercredi = 2.1,
}
let jo: Jour;
jo = Jour.Mercredi;

console.log(typeof Jour); // object
console.log(jo, typeof jo, typeof jo == 'number', Jour[2.1]); // number variable dans jour associé à des valeurs numériques

// déclarer ti comme array de string ou number
let ti: (number | string | object)[];
ti = [];
ti.push(12, 14, 20, '10', { x: 12 }, [6, 7, 8], jo);
// supprimer valeur index 1 mais il garde undefined comme valeur
delete ti[1];
ti.splice(3, 1);
console.log(ti, typeof ti, typeof ti == 'object', ti.length, ti[1], ti[3]);

// déclarer une array avec une syntaxe différente
let tj: Array<number | string | object>;
tj = [34, 'test', { z: 22 }];

// Boucles

for (const key in tj) {
  console.log(key, tj[key]);
}

for (const key in p) {
  console.log(key, p[key as keyof Point]);
}

for (const val of tj) {
  console.log(val);
}

for (const c of 'maman') {
  console.log(c);
}

// transform string to number

let st: string = String(12);
let sti: number = Number('10');

//Functions
function f1(p1: string | undefined = undefined, p3: any, p2 = 0, p4?: any) {
  // p?: any optional parameter of any type
  console.log(p1);
}

let r;
// paramètres optionnels tout le temps à la fin des functions
f1(r, oi);

console.log(f1, typeof f1, typeof f1 == 'function');

let f2 = function (...nums: number[]) {
  nums.forEach((x) => console.log(x));
};

f2(2, 5, 6, 7);

console.log(f2, typeof f2);
