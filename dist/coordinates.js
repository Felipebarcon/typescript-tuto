"use strict";
//*********************************************** */
//*********************************************** */
// interface pour une Classe
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinates = void 0;
//*********************************************** */
//*********************************************** */
class Coordinates {
    constructor(lat, lg) {
        this._lat = 0;
        this._lg = 0;
        this.lat = lat; // appel setter
        this.lg = lg; // appel setter
    }
    // Getter
    get lat() {
        return this._lat;
    }
    get lg() {
        return this._lg;
    }
    // Setter lattitude
    set lat(_lat) {
        if (_lat >= Coordinates.MIN_LAT && _lat <= Coordinates.MAX_LAT) {
            this._lat = _lat;
        }
        else {
            console.log('latitude invalide');
        }
    }
    // Setter longitude
    set lg(_lg) {
        if (_lg >= Coordinates.MIN_LONG && _lg <= Coordinates.MAX_LONG) {
            this._lg = _lg;
        }
        else {
            console.log('longitude invalide');
        }
    }
    // Function to print lat and lg
    dessine() {
        console.log(`latitude: ${this.lat}, longitude: ${this.lg}`);
    }
    static bouge(c, x, y) {
        c.lat += x;
        c.lg += y;
    }
}
exports.Coordinates = Coordinates;
Coordinates.MIN_LONG = -180;
Coordinates.MAX_LONG = 180;
Coordinates.MIN_LAT = -90;
Coordinates.MAX_LAT = 90;
