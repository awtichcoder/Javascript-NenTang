const num1 = 3.563232324343;
const fixednum = num1.toFixed(2); // lam tron 2 chu so thap phan sao giau phay
console.log(fixednum); //3.13
console.log(typeof fixednum); // string

console.log("-------------------------------------------------------");

const num2 = 123.6253232324343;
const pre = num2.toPrecision(4); // lay ra 4 so vd 123.6 la 4 so
console.log(pre); //3.13
console.log(typeof pre); // string

console.log("-------------------------------------------------------");

const num3 = 255;
const binary = num3.toString(2); // chuyen sang he nhi phan
const hex = num3.toString(16); // chuyen sang he thap luc phan
console.log(binary);
console.log(hex);

console.log("-------------------------------------------------------");

console.log(isFinite(123)); // true la 1 so co the dem dc
console.log(isFinite(Infinity)); // false
console.log(isFinite("123")); // true tu chuoi chuye nthanh so

console.log("-------------------------------------------------------");

console.log(Number.isInteger(12322112)); //TRUE, Check xem no co phai la interger hay khom
console.log(Number.isInteger(-Infinity)); //FALSE
console.log(Number.isInteger(Infinity));

console.log("-------------------------------------------------------");

// kiem tra xem no co nam trong gioi han an toan so nguyen interger hay khom
// an toan la tu -( 2^53 -1) toi +( 2^53 -1)
const a1 = Math.pow(2, 23);
const a2 = Math.pow(2, 53);
console.log(Number.isSafeInteger(a1));
console.log(Number.isSafeInteger(a2));

console.log("-------------------------------------------------------");

//NaN: ko the the hien dc
console.log(0 / 0); //NaN
console.log(Number.NaN);
console.log(parseInt("avad"));
console.log(parseInt("avad") === NaN); // ko the so sanh dc
