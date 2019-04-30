// SYMBOLS

// const _radius = Symbol();
// const _draw = Symbol();

// class Circle {
//   constructor(radius) {
//     this[_radius] = radius;
//   }

//   [_draw]() {}
// }

// const c = new Circle(1);
// // If we console.log c, it won't show the property radius, just will show Symbol

// // Below is a way to hack and change the Symbol property
// const key = Object.getOwnPropertySymbols(c)[0];
// c[key] = 2;

// WEAKMAPS
const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    // if we use a regular function, the object (this) will not show on the console
    // _move.set(this, function() {
    //   console.log("move", this);
    // });

    // To see the object (this), we can use an arrow function, which refers to the this value of the container function
    _move.set(this, () => {
      console.log("move", this);
    });
  }

  draw() {
    console.log(_radius.get(this));
    _move.get(this)();
    console.log("draw");
  }

  // to implement a function to get the value of a property, we can implement a get method, which looks like a method but behaves like a property
  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw Error("invalid radius");
    _radius.set(this, value);
  }
}

const c = new Circle(1);
