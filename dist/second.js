"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const coordinates3d_1 = __importDefault(require("./coordinates3d"));
const coordinates_1 = require("./coordinates");
//**************************************** */
//**************************************** */
// Types Génériques
let a; // array de number
let b;
a = b = [1, 2, 3];
// function return random number from array
function getRandomArry(arr) {
    let a = Math.floor(Math.random() * arr.length);
    return arr[a];
}
console.log(getRandomArry([1, 'a', true]));
// Assume that the type of the parameter is unknown
function getRandomArryGen(arr) {
    let a = Math.floor(Math.random() * arr.length);
    return arr[a];
}
let arry = [new coordinates3d_1.default(1, 2, 3), new coordinates_1.Coordinates(8, 9)];
let arry2 = getRandomArryGen(arry);
for (const dessin of arry) {
    dessin.dessine();
    // Tester si dessin est un objet de type Dessinable
    if (dessin instanceof coordinates_1.Coordinates) {
        console.log('latitude:', dessin.lat, 'longitude :', dessin.lg);
    }
    if (dessin instanceof coordinates3d_1.default) {
        console.log('latitude:', dessin.lat, 'longitude :', dessin.lg, 'altitude :', dessin.alt);
    }
}
//**************************************** */
//**************************************** */
// Genercics classes
class Collection {
    constructor(u, dessin, ...population) {
        this.population = [];
        // ... utiliser pour récupérer les arguments optionnels passés en paramètre
        this.population = population; // population est un tableau de type T
        this.u = u;
        this.dessin = dessin;
    }
    getFirst() {
        this.dessin.dessine();
        return this.population[0];
    }
    getLast() {
        this.dessin.dessine();
        return this.population[this.population.length - 1];
    }
    add(element) {
        this.population.push(element);
    }
}
let coll = new Collection('toto', new coordinates_1.Coordinates(2, 4), 3, 6, 7, 8, 9);
coll.add(12);
