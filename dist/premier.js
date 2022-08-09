"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coordinates_1 = require("./coordinates");
const coordinates3d_1 = require("./coordinates3d");
// import { default as Coord3d }  from './coordinates3d';
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
    y: 20,
    z: 30,
};
console.log(oi.x, typeof oi.x, typeof oi.x == 'number', oi['x']);
// obligation de donner une valeur à x et y, initialisation de p comme object.
let p = { x: 12, y: 20 };
console.log(p, typeof p, typeof o == 'object');
// Declaration
let a;
// Affectation
a = 'Singe';
console.log(typeof a);
var Jour;
(function (Jour) {
    Jour[Jour["Lundi"] = 1.5] = "Lundi";
    Jour[Jour["Mardi"] = 2.1] = "Mardi";
    Jour[Jour["Mercredi"] = 2.1] = "Mercredi";
})(Jour || (Jour = {}));
let jo;
jo = Jour.Mercredi;
console.log(typeof Jour); // object
console.log(jo, typeof jo, typeof jo == 'number', Jour[2.1]); // number variable dans jour associé à des valeurs numériques
// déclarer ti comme array de string ou number
let ti;
ti = [];
ti.push(12, 14, 20, '10', { x: 12 }, [6, 7, 8], jo);
// supprimer valeur index 1 mais il garde undefined comme valeur
delete ti[1];
ti.splice(3, 1);
console.log(ti, typeof ti, typeof ti == 'object', ti.length, ti[1], ti[3]);
// déclarer une array avec une syntaxe différente
let tj;
tj = [34, 'test', { z: 22 }];
//*********************************************** */
//*********************************************** */
// Boucles
for (const key in tj) {
    console.log(key, tj[key]);
}
for (const key in p) {
    console.log(key, p[key]);
}
for (const val of tj) {
    console.log(val);
}
for (const c of 'maman') {
    console.log(c);
}
//*********************************************** */
//*********************************************** */
// transform string to number
let st = String(12);
let sti = Number('10');
//Functions
function f1(p1 = undefined, p3, p2 = 0, p4) {
    // p?: any optional parameter of any type
    console.log(p1);
}
let r;
// paramètres optionnels tout le temps à la fin des functions
f1(r, oi);
console.log(f1, typeof f1, typeof f1 == 'function');
let f2 = function (...nums) {
    nums.forEach((x) => console.log(x));
};
f2(2, 5, 6, 7);
console.log(f2, typeof f2);
let ta = [10];
let tb = ta;
ta[0]++;
console.log(tb); //11 ==> ta et tb sont le même object si ta change tb change
function test(tc) {
    tc[0]++;
}
test(tb);
console.log(tb); //12
let td = 10;
function test2() {
    td++;
}
test2();
console.log(td); // 11
function test3(tc) {
    // parametre = variable locale
    return tc + 1;
}
td = test3(td);
console.log(td); //11
// v++ <=> ++v post-increment <=> pre-increment
td = 100;
console.log(td++); //100
console.log(++td); // 102
console.log(td); // 102
let oif = {
    x: 10,
    y: 20,
    z: 30,
    f: function () {
        console.log(oif.x + oif.y + oif.z);
    },
};
oif.x = 100;
oif.f();
let coor = {
    lat: 1234,
    long: 4567,
    dessine: function () {
        console.log(coor.lat, coor.long);
    },
};
coor.dessine();
//*********************************************** */
//*********************************************** */
let ii = 12;
console.log(ii.constructor.name, ''.constructor.name, {}.constructor.name, true.constructor.name, [].constructor.name, f1.constructor.name);
let jetdeau = new coordinates_1.Coordinates(-121212112, 34);
console.log(jetdeau.lat);
jetdeau.dessine();
let jetdeau3d = new coordinates3d_1.Coordinates3d(-55, 67, 450);
jetdeau3d.dessine();
console.log(jetdeau3d, typeof jetdeau3d, typeof jetdeau3d == 'object', jetdeau3d.constructor.name, jetdeau3d instanceof coordinates3d_1.Coordinates3d, jetdeau3d instanceof coordinates_1.Coordinates, jetdeau3d instanceof Object);
coordinates_1.Coordinates.bouge(jetdeau, 1, 2);
jetdeau.dessine();
coordinates_1.Coordinates.bouge(jetdeau3d, 1, 2);
jetdeau3d.dessine();
coordinates3d_1.Coordinates3d.bouge3d(jetdeau3d, 1, 2, 100);
jetdeau3d.dessine();
//*********************************************** */
//*********************************************** */
