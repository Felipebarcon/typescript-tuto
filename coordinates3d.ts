import { Coordinates, Visitable, Dessinable } from './coordinates';

export class Coordinates3d
  extends Coordinates
  implements Visitable, Dessinable
{
  private _alt: number = 0;
  static MaxAlt: number = 12000;
  static MinAlt: number = -12000;

  constructor(lat: number, lg: number, alt: number) {
    super(lat, lg);
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
  set alt(_alt: number) {
    // if (_alt >= Coordinates3D.MinAlt && _alt <= Coordinates3D.MaxAlt)
    if (_alt >= -11000 && _alt <= 12000) {
      this._alt = _alt;
    } else {
      console.log('altitude invalide');
    }
  }

  // methode d'instance
  dessine() {
    console.log(
      `latitude: ${this.lat}, longitude: ${this.lg} altitude: ${this.alt}`
    );
  }

  // static methode de classe
  static bouge3d(c: Coordinates3d, x: number, y: number, z: number) {
    c.lat += x;
    c.lg += y;
    c.alt += z;
  }
}

Coordinates3d.prototype.dessine = function () {
  console.log(
    `latitude: ${this.lat}, longitude: ${this.lg} altitude: ${this.alt}`
  );
};

export default Coordinates3d;
