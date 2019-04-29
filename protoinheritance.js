function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle(radius, color) {
  //to pass the color parameter to the shape constructor, we need to call the function:
  Shape.call(this, color);
  this.radius = radius;
}

// Default creating of the Circle object:
//Circle.prototype = Object.create(Object.prototype) // objectBase

// Defining a new objectbase (in this case shapebase):
Circle.prototype = Object.create(Shape.prototype);
// in this case new Circle.prototype.constructor will return a Shape, not a Circle
// to solve, we define:
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log("draw");
};

// We'll create a reusable function to change prototypical inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Square(size) {
  this.size = size;
}

extend(Square, Shape);

// If I set a method straight in the Child, it will override the method in the parent:
Circle.prototype.duplicate = function() {
  Shape.prototype.duplicate.call(this);
  console.log("duplicate Circle");
};

const s = new Shape();
const c = new Circle(1, "red");
