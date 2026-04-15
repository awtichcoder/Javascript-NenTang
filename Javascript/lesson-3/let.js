// let cung co co che hoisting nhu var, nhung khong duoc phep truy cap truoc khi khai bao
// ReferenceError: Cannot access 'namlet' before initialization
//console.log(namlet); loi khi truy cap truoc khi khai bao
let namlet = "Nguyen Van A";
console.log(namlet);
// let: khong the khai bao lai, nhung co the gan lai gia tri
namlet = "Nguyen Van B";
console.log(namlet);
