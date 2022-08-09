//*********************************************** */
//*********************************************** */
// interface pour une Classe

interface Visitable {
  visiter: () => void;
}

interface Dessinable {
  dessine: () => void;
}

//*********************************************** */
//*********************************************** */

class Coordinates implements Dessinable {
  private _lat: number = 0;
  private _lg: number = 0;
  private static readonly MIN_LONG = -180;
  private static readonly MAX_LONG = 180;
  private static readonly MIN_LAT = -90;
  private static readonly MAX_LAT = 90;

  constructor(lat: number, lg: number) {
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
  set lat(_lat: number) {
    if (_lat >= Coordinates.MIN_LAT && _lat <= Coordinates.MAX_LAT) {
      this._lat = _lat;
    } else {
      console.log('latitude invalide');
    }
  }

  // Setter longitude
  set lg(_lg: number) {
    if (_lg >= Coordinates.MIN_LONG && _lg <= Coordinates.MAX_LONG) {
      this._lg = _lg;
    } else {
      console.log('longitude invalide');
    }
  }

  // Function to print lat and lg

  dessine() {
    console.log(`latitude: ${this.lat}, longitude: ${this.lg}`);
  }

  static bouge(c: Coordinates, x: number, y: number) {
    c.lat += x;
    c.lg += y;
  }
}

export { Coordinates, Visitable, Dessinable };
