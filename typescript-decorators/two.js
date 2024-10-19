"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var math = require("./one");
console.log(math.pi);
var RandomNumberGenerator = math.default;
var random = new RandomNumberGenerator(12);
console.log(random.no);
