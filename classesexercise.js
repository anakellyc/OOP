const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  peek() {
    const items = _items.get(this);
    if (items.length === 0) throw new Error("stack is empty");
    return items[items.length - 1];
  }

  pop() {
    const items = _items.get(this);
    if (items.length === 0) throw new Error("stack is empty");
    return items.splice(items.length - 1, 1);
  }

  push(el) {
    _items.get(this).push(el);
  }

  get count() {
    return _items.get(this).length;
  }
}
