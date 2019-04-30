class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    // When you make a constructor in an extension class, you need to use the super keyword to initialize the constructor from the parent. Do not forget to pass the required argument accordingly
    super(color);
    this.radius = radius;
  }
  draw() {
    console.log("draw");
  }

  //Overriding a method from the parent
  move() {
    // to also use the method from the parent, you can call it with the super keyword
    super.move();
    console.log("circle move");
  }
}

const c = new Circle("red", 1);
