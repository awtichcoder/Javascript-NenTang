const person = {
  greet() {
    console.log("hello there!");
  },
};
const kietdev = Object.create(person); // no se ke thua lai cua lop person
kietdev.name = "kiet dc";
kietdev.greet();
console.log(kietdev.name);

console.log("-------------------------------------------------------");

// noi object neu trug thi no gan lun gia tri
const target = { a: 1, b: 2 }; // doi tuong dich
const origin = { b: 4, c: 5 }; // ddoi tuong nguon
const result = Object.assign(target, origin);
console.log(result);
console.log(target);
console.log(origin);

console.log("-------------------------------------------------------");

// sua doi 1 thuoc tinh cua object
const obj1 = {};
Object.defineProperty(obj1, "name", {
  value: "kiet de thuong",
  writable: false, // khom cho phep thay doi
});
console.log(obj1.name);
obj1.name = "ufuuudsuueeuew";
console.log(obj1.name);

console.log("-------------------------------------------------------");

// thay doi nhiu thuoc tinh cung luc
const user = {};

Object.defineProperties(user, {
  firstName: {
    value: "kiet",
    writable: true, // Cho phép sửa
  },
  lastName: {
    value: "Dev",
    writable: false, // Không cho phép sửa [00:14:05]
  },
  email: {
    value: "sdhfdhd",
    enumerable: false, // Thuộc tính này sẽ bị ẩn khi lặp qua Object
  },
});

console.log(user.firstName);
console.log(user.lastName);

console.log("-------------------------------------------------------");

const a1 = { a: 1, b: 2, c: 5433, c: "dusf" };
console.log(Object.keys(a1));
console.log(Object.values(a1));
console.log(Object.entries(a1)); // no chuyen thanh key va value
console.log(Object.fromEntries(Object.entries(a1))); // no chuyen cap key value thanh obj
