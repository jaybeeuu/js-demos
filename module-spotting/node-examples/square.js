module.exports = class Square {
  constructor(width) {
    this.width = width;
  }

  area() {
    return this.width ** 2;
  }

  perimeter() {
    return 4 * this.width;
  }
};
