const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this.brand;
  }

  get motor() {
    return this.motor;
  }

  get color() {
    return this.color;
  }

  cloneCar() {
    return new this.constructor(this[_brand], this[_motor], this[_color]);
  }
}
