export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
<<<<<<< HEAD
          'Class extending Building must override evacuationWarningMessage',
=======
          'Class extending Building must override evacuationWarningMessage'
>>>>>>> e7ecde0e550970c71d46f649d383aaa225e36709
        );
      }
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
