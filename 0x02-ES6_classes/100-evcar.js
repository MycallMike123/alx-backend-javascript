import Car from './10-car';

// Define the EVCar class that extends the Car class
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range; // Set the range property of the EVCar instance
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
