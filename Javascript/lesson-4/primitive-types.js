/** Primitive Types
 *  cac gia tri Primitive duoc luu tru trong Stack, nen khi gan gia tri cua bien khac thi no se tao ra mot gia tri moi va gan cho bien do, khong anh huong den gia tri ban dau
 * khi thay doi gia tri cua bien, no se tao ra mot gia tri moi va gan cho bien do, khong anh huong den gia tri ban dau
 * khi gan gia tri cua bien khac cho bien do, no se tao ra mot gia tri moi va gan cho bien do, khong anh huong den gia tri ban dau
 */
// Number
let num1 = 10;
let age = 16;
let a1 = 0.1;
console.log(num1, typeof age, a1);
console.log("------------------");

// String
let name = "Nguyen Van A";
let name2 = "Nguyen Van B";
console.log(name, typeof name2, name2);
console.log("------------------");

// Boolean
let isStudent = true;
let isTeacher = false;
console.log(isStudent, typeof isTeacher, isTeacher);
console.log("------------------");

// Null : null la mot gia tri dac biet, khong co gia tri nao duoc gan cho no, va no khac voi undefined
let nullValue = null;
console.log(nullValue, typeof nullValue);
console.log("------------------");

// Undefined: undefined la mot gia tri dac biet, khi mot bien duoc khai bao nhung chua duoc gan gia tri nao, thi no se co gia tri la undefined
let undefinedValue;
console.log(undefinedValue, typeof undefinedValue);
console.log("------------------");

// Symbol: Symbol la mot kieu du lieu moi duoc gioi thieu trong ES6, no duoc su dung de tao ra mot gia tri duy nhat va khong the bi trung lap voi bat ky gia tri nao khac
let symbol1 = Symbol("symbol1");
let symbol2 = Symbol("symbol2");
console.log(symbol1, typeof symbol2, symbol2);
console.log("------------------");

// BigInt: BigInt la mot kieu du lieu moi duoc gioi thieu trong ES2020, no duoc su dung de luu tru cac so nguyen lon hon 2^53 - 1, gia tri lon nhat ma kieu Number co the luu tru
let bigInt1 = 9007199254740991n; // su dung 'n' de khai bao mot gia tri BigInt
let bigInt2 = BigInt("9007199254740991");
console.log(bigInt1, typeof bigInt2, bigInt2);
console.log("------------------");
