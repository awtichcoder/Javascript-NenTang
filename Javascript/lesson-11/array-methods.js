let number = [1, 2, 3, 4, 5, 4, 3];
console.log(`do dai mang la:`, number.length);

// push()- them phan tu vao cuoi ccung
number.push(6);
console.log(number);
console.log(`do dai mang la:`, number.length);
// pop() loai o phan tu cuoi cung
number.pop();
console.log(number);
console.log(`do dai mang la:`, number.length);
// shift() loai bo phan tu dau tien
number.shift();
console.log(number);
console.log(`do dai mang la:`, number.length);
// unshift() them phan tu vao dau tien
number.unshift(1000);
console.log(number);
console.log(`do dai mang la:`, number.length);
// foreach()- lap qua tung phan tu cua mang
number.forEach((number1, index) => {
  console.log(`jdf ${number1}`);
});
// map() lap qua tung phan tu va tra ve mang moi
let number2 = number.map((number1) => {
  return number1 * number1;
});
console.log(number2);
//filter()  tao 1 mang moi voi cac phan tu thoa man dk
let eve = number.filter((num) => {
  return num % 2 == 0;
});
console.log(eve);
// find() tim phan tu dau tien thoa mang dieu kien
let fo = number.find((num1) => {
  return num1 > 3;
});
console.log(fo);
// reduce()// tinh toan gia tri duy nhat trong mang
let sum = number.reduce((total, num3) => {
  return total + num3;
}, 0);
console.log(sum);

// some() kiem tra xem mang co it nhat 1 phan tu thoa dk hay ko
let has = number.some((sum4) => {
  console.log(sum4);
  return sum4 % 2 === 0;
});
console.log(has);
