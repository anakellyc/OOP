// Implementation Detail - not exported
const _radius = new WeakMap();

// Public Interface - module exported
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}

module.exports = Circle;
// If you have more than one moddule:
//module.exports.Circle = Circle;
//module.exports.ANOTHERMODULE = AnotherModule
