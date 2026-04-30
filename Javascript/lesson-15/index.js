console.log(parseFloat("23.23")); // 23.23
console.log(parseFloat("23.23aew4")); // 23.23
console.log(parseFloat("as23.23")); // NaN

console.log("-------------------------------------------------------");

console.log(parseInt("2323")); // 23.23
console.log(parseInt("23.23")); //23
console.log(parseInt("2323aew4")); //2323
console.log(parseInt("as2323")); // NaN

console.log("-------------------------------------------------------");

const mun = new Number(123);
console.log(mun);
console.log(typeof mun);
const value = mun.valueOf();
console.log(value);
console.log(typeof value);
console.log(new Date().valueOf()); //se tra ve timestamp
// https://www.epochconverter.com

console.log("-------------------------------------------------------");

const max = Number.MAX_VALUE; //SO LON NAY DC CON LA INFINITY
console.log(max);
console.log(max * 3);

console.log("-------------------------------------------------------");

const min = Number.MIN_VALUE; // so min nho nhat ma js co the dai dien
console.log(min);
console.log(min / 3);
