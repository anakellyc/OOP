function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
  console.log("duplicate circle");
};

function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function() {
  console.log("duplicate square");
};

const shapes = [new Circle(), new Square(), new Shape()];

for (let shape of shapes) shape.duplicate();

//MIXINS - COMBINATION
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function() {
    this.hunger--;
    console.log("eating");
  }
};

const canWalk = {
  walk: function() {
    console.log("walk");
  }
};

const canSwin = {
  swin: function() {
    console.log("swim");
  }
};

function Person() {}

//Object.assign(Person.prototype, canEat, canWalk);

mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);

function Goldfish() {}

mixin(Goldfish.prototype, canEat, canSwin);

const goldfish = new Goldfish();
console.log(goldfish);
