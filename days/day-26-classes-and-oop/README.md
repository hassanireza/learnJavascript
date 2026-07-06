[← Back to Course Home](../../README.md)

# Day 26: Classes and OOP

> Learn JavaScript classes, constructors, inheritance, and object oriented programming concepts with practical examples.

**Day 26 of 30** &nbsp;|&nbsp; Stage: Async, OOP, and the Real World &nbsp;|&nbsp; Estimated time: 50-65 minutes

---

## What You Will Learn

- Define classes with constructors and methods
- Create multiple instances from a class
- Use inheritance with extends and super
- Understand encapsulation with private fields

---

## Why Classes?

A class is a template for creating objects that share the same structure and behavior. If you find yourself creating many similar objects with the same shape, like users, products, or accounts, a class can organize that logic in one place.

## Defining a Class

```js
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getFormattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }
}

const laptop = new Product("Laptop", 999.99);
console.log(laptop.name);               // "Laptop"
console.log(laptop.getFormattedPrice()); // "$999.99"
```

`new Product(...)` calls the `constructor`, which runs once per instance to set up its initial state. Methods defined in the class body are shared across every instance.

## Multiple Instances

```js
const pen = new Product("Pen", 2.5);
const desk = new Product("Desk", 150);

console.log(pen.getFormattedPrice());  // "$2.50"
console.log(desk.getFormattedPrice()); // "$150.00"
```

## Inheritance with extends and super

Inheritance lets one class build on another, reusing and extending its behavior.

```js
class DigitalProduct extends Product {
  constructor(name, price, downloadUrl) {
    super(name, price); // calls Product's constructor
    this.downloadUrl = downloadUrl;
  }

  getDownloadLink() {
    return `Download ${this.name} at ${this.downloadUrl}`;
  }
}

const ebook = new DigitalProduct("JavaScript Guide", 19.99, "example.com/ebook");
console.log(ebook.getFormattedPrice());  // "$19.99", inherited from Product
console.log(ebook.getDownloadLink());    // own method
```

## Private Fields

Fields prefixed with `#` are private, accessible only inside the class itself, supporting true encapsulation.

```js
class BankAccount {
  #balance; // private field

  constructor(startingBalance) {
    this.#balance = startingBalance;
  }

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);
console.log(account.deposit(50));     // 150
console.log(account.getBalance());    // 150
// console.log(account.#balance);     // SyntaxError, cannot access from outside
```

## Static Methods

Static methods belong to the class itself, not to individual instances, often used for utility or factory functions.

```js
class MathHelper {
  static square(n) {
    return n * n;
  }
}

console.log(MathHelper.square(5)); // 25
```

## Classes Are Built on Prototypes

Under the hood, JavaScript classes use the same prototype based inheritance system that existed before the `class` keyword was introduced in ES6. The `class` syntax is widely preferred today because it is clearer and less error prone to write and read.

---

## Best Practice

> Use private fields (`#field`) for any internal state that should not be modified directly from outside an object, exposing controlled access only through methods. Favor composition (building objects out of smaller pieces) over deep inheritance chains when relationships between classes become complex, since deep inheritance can become difficult to maintain.

---

## Quick Recap

- A class is a template for creating objects with shared structure and behavior
- `constructor()` runs once per instance to set initial state
- `extends` and `super()` enable inheritance between classes
- Private fields (`#field`) enforce encapsulation
- Static methods belong to the class itself, not individual instances

---

## Try It Yourself

Create a class Animal with a name and a method speak() returning a string like "{name} makes a sound." Create a subclass Dog that overrides speak() to return "{name} barks." instead.

---

## Today's Project: Library Management System

Model a small library system using classes for books and members, including borrowing and returning logic.

**[Open the Day 26 project brief →](../../projects/day-26-library-management-system/README.md)**

---

## Navigation

[← Day 25: Local Storage](../day-25-local-storage/README.md) &nbsp;&middot;&nbsp; [Course Home](../../README.md) &nbsp;&middot;&nbsp; [Day 27: JavaScript Modules →](../day-27-javascript-modules/README.md)
