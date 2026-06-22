// Day 27 Project: main.js
// Entry point, imports from operations.js and formatter.js

import { add, subtract, multiply, divide } from "./operations.js";
import formatCurrency from "./formatter.js";

// TODO: Run a few sample calculations using the imported functions
// TODO: Log each result formatted with formatCurrency()

console.log("Modular Calculator main.js loaded.");
console.log(formatCurrency(add(10, 5)));
