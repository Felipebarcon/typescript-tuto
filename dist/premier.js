"use strict";
let i = 10;
const j = 100;
console.log(i + j, typeof i);
let s = 'salut';
console.log(s, typeof s);
let v; // console.log(v, typeof v, typeof v == 'undefined');
let w;
let z;
console.log(z, typeof z, typeof z == 'undefined'); // undefined. S'assurer d'assigner une valeur à une variable!!
let b;
let o = {};
console.log(o, typeof o, typeof o == 'object');
let oi = {
    x: 10,
};
console.log(oi.x, typeof oi.x, typeof oi.x == 'number', oi['x']);
// obligation de donner une valeur à x et y, initialisation de p comme object.
let p = { x: 12, y: 20 };
p.x = 14;
console.log(p, typeof p, typeof o == 'object');
