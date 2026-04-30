//
const a1 = { a: 1, b: 2, c: 5433, c: "dusf" };
Object.freeze(a1); // dong bang  ko cho them sua xoa gi het
a1.a = 23; // sua no
a1.a1 = 12; // them no
delete a1.a; // xoa no
console.log(a1);

console.log("-------------------------------------------------------");

console.log(Object.isFrozen(a1)); // kiem tra doi tuong da bi dong bang hay chua

console.log("-------------------------------------------------------");

const a2 = { a: 1, b: 2, c: 5433, c: "dusf" };
Object.seal(a2);
a2.a = 23; // sua  true
a2.a1 = 12; // them no
delete a2.a; // xoa no
console.log(a2);

console.log(Object.isSealed(a1)); // kiem tra doi tuong da bi dong bang hay chua

console.log("-------------------------------------------------------");

const a3 = { a: 1, b: 2, c: 5433, c: "dusf" };

console.log(Object.hasOwn(a3, "name"));
console.log(Object.hasOwn(a3, "c"));

console.log("-------------------------------------------------------");

const inventory = [
  { name: "Sầu riêng", type: "fruit", quantity: 5 },
  { name: "Bông cải", type: "vegetable", quantity: 10 },
  { name: "Chuối", type: "fruit", quantity: 12 },
  { name: "Cà rốt", type: "vegetable", quantity: 7 },
];
const result = Object.groupBy(inventory, (item) => item.type);
console.log(result);
