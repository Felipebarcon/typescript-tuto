"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//*********************************************** */
//*********************************************** */
// Decorator
function deco1(appel) {
    console.log('factory de deco 1 appelée');
    // Function de décorateur appellée dans l'ordre inverse
    return function (target, propertyKey, descriptor) {
        console.log('deco 1 a été appelé', target, propertyKey);
        if (appel) {
            descriptor.value();
        }
    };
}
const deco2 = (appel = true) => {
    return (target, propertyKey) => {
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
const nomsAutorises = (...autorises) => {
    if (autorises.length == 0) {
        autorises.push('felipe', 'pierre');
    }
    // const autorises = ['felipe', 'pierre'];
    return (target, name) => {
        let courant = target[name];
        Object.defineProperty(target, name, {
            set: (nouveau) => {
                if (autorises.includes(nouveau)) {
                    courant = nouveau;
                    console.log('courant', courant, ', nouveau', nouveau);
                }
                else
                    return;
            },
            get: () => courant.toUpperCase(),
        });
    };
};
class Bidon {
    constructor() {
        this.nom = 'felipe';
    }
    test() {
        console.log('test est appelé');
    }
}
__decorate([
    deco1(true) // utilisation du decorateur 1
    ,
    deco2() // utilisation du decorateur 2
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Bidon.prototype, "test", null);
__decorate([
    nomsAutorises('paul', 'henri', 'felipe'),
    __metadata("design:type", String)
], Bidon.prototype, "nom", void 0);
let b = new Bidon();
b.nom = 'alexis';
console.log(b.nom);
