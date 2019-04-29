function HtmlElement() {
  this.click = function() {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function() {
  console.log("focused");
};

function HtmlSelectElement(item = []) {
  this.items = item;
  this.addItem = function(...item) {
    this.items.push(...item);
  };
  this.removeItem = function(...item) {
    for (el of item) this.items.splice(this.items.indexOf(el), 1);
  };
  this.render = function() {
    return `
    <select>${this.items
      .map(
        item => `
      <option>${item}</option>`
      )
      .join("")}
    </select>`;
  };
}

// If we use the code below, the click method will not be include, because it's not in the HtmlElement prototype
//HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);

// So we need to set the prototype to an actual new HtmlElement object
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlElement;

function HtmlImageElement(src) {
  this.src = src;
  this.render = function() {
    return `<img src="${this.src}" />`;
  };
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("http://")
];

for (let element of elements) console.log(element.render());
