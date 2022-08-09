"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinates3d = void 0;
const coordinates_1 = require("./coordinates");
class Coordinates3d extends coordinates_1.Coordinates {
    constructor(lat, lg, alt) {
        super(lat, lg);
        this._alt = 0;
        this.alt = alt; // appel setter
    }
    visiter() {
        console.log('Je visite un point 3D');
    }
    // getter
    get alt() {
        return this._alt;
    }
    // setter altitude
    set alt(_alt) {
        // if (_alt >= Coordinates3D.MinAlt && _alt <= Coordinates3D.MaxAlt)
        if (_alt >= -11000 && _alt <= 12000) {
            this._alt = _alt;
        }
        else {
            console.log('altitude invalide');
        }
    }
    // methode d'instance
    dessine() {
        console.log(`latitude: ${this.lat}, longitude: ${this.lg} altitude: ${this.alt}`);
    }
    // static methode de classe
    static bouge3d(c, x, y, z) {
        c.lat += x;
        c.lg += y;
        c.alt += z;
    }
}
exports.Coordinates3d = Coordinates3d;
Coordinates3d.MaxAlt = 12000;
Coordinates3d.MinAlt = -12000;
Coordinates3d.prototype.dessine = function () {
    console.log(`latitude: ${this.lat}, longitude: ${this.lg} altitude: ${this.alt}`);
};
exports.default = Coordinates3d;
