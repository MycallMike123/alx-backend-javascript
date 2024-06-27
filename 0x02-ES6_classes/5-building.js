export default class Building {
  // Constructor fn that takes a parameter named sqft
  constructor(sqft) {
    // Set the _sqft property to the value of sqft
    this._sqft = sqft;

    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      // Throw an error if the above condition is true
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  get sqft() {
    return this._sqft;
  }
}
