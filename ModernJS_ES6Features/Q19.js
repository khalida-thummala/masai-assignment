// 1. Template Literals + Expressions

// a)
console.log(`5 + 7 = ${5 + 7}`);

// b)
const multiLine = `
This is line 1
This is line 2
This is line 3
`;
console.log(multiLine);

// c)
const firstName = "John";
const lastName = "Doe";
console.log(`Full name: ${firstName} ${lastName}`);


// 2. Arrow Functions & this

// a)
const square = n => n * n;

// b)
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();

// c)
const obj2 = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj2.test();


// 3. Rest, Spread & Copying Objects

const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(4, 8, 2, 10));


// 4. Destructuring & Optional Chaining

const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

const info = {};
console.log(info.user?.address?.city);


// 5. Scoping (let/var/const)

for (var i = 0; i < 3; i++) {}
console.log(i);

for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError if uncommented


// 6. Ternary Operator – Practice

let speed;
let kmph = 60;
speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

const age = 21;
console.log(age >= 18 ? "Adult" : "Minor");

const num = -5;
const sign =
  num > 0 ? "Positive" :
  num === 0 ? "Zero" :
  "Negative";
console.log(sign);


// 7. Spread, Rest & Arrays

const nums = [1, 2, 3];
const numsUpdated = [...nums, 4, 5];
console.log(numsUpdated);

const aArr = ["x", "y"];
const bArr = ["z"];
const combined = [...aArr, ...bArr];
console.log(combined);

const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));


// 8. Object Destructuring & Shorthand

const userA = { id: 101, status: "active" };
const { id, status } = userA;
console.log(id, status);

const id2 = 101;
const role = "admin";
const userB = { id2, role };
console.log(userB);

const person = {
  name: "Sam",
  greet() {
    console.log("Hello!");
  }
};
person.greet();


// 9. Template Literals (More Practice)

console.log(`Today's date: ${new Date().toDateString()}`);

const NAME = "Khalida";
const SCORE = 90;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


// 10. Arrow Function Shorthands

const add = (x, y) => x + y;

const isAdult = age => age >= 18;

const double = n => n * 2;


// 11. Spread Operator (Arrays & Objects)

const arrClone = [...nums];
const arrStart = [100, ...nums];

const objA = { name: "A", value: 1 };
const objB = { value: 99 };
const mergedObj = { ...objA, ...objB };


// 12. Optional Chaining (More Practice)

const userX = {
  name: "Alex",
  address: { city: "Bangalore" }
};
console.log(userX.address?.city);

console.log(userX.job?.title);

const item = {};
console.log(item.specs?.details?.size);
