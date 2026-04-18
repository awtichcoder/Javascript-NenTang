// Object trong JavaScript - Bài học 9

// 1. Tạo object bằng object literal
let person = {
  name: "Nguyen Van A",
  age: 25,
  city: "Hanoi",
  isStudent: true,
};

console.log("Object person:", person);

// 2. Truy cập thuộc tính bằng dot notation
console.log("Tên:", person.name);
console.log("Tuổi:", person.age);

// 3. Truy cập thuộc tính bằng bracket notation
console.log("Thành phố:", person["city"]);

// 4. Thêm thuộc tính mới
person.email = "nguyenvana@example.com";
person["phone"] = "0123456789";

console.log("Object sau khi thêm thuộc tính:", person);

// 5. Sửa đổi thuộc tính
person.age = 26;
person["city"] = "Ho Chi Minh City";

console.log("Object sau khi sửa đổi:", person);

// 6. Xóa thuộc tính
delete person.isStudent;

console.log("Object sau khi xóa thuộc tính:", person);

// 7. Object với method (phương thức)
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    console.log("Xe " + this.brand + " đã khởi động!");
  },
  getInfo: function () {
    return this.brand + " " + this.model + " (" + this.year + ")";
  },
};

car.start();
console.log("Thông tin xe:", car.getInfo());

// 8. Duyệt qua các thuộc tính của object
console.log("Các thuộc tính của object car:");
for (let key in car) {
  if (typeof car[key] !== "function") {
    console.log(key + ": " + car[key]);
  }
}

// 9. Object methods hữu ích
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// 10. Sao chép object (shallow copy)
let personCopy = Object.assign({}, person);
personCopy.name = "Tran Thi B";

console.log("Original person:", person);
console.log("Copied person:", personCopy);

// 11. Kiểm tra thuộc tính tồn tại
console.log("Có thuộc tính 'name'?", person.hasOwnProperty("name"));
console.log("Có thuộc tính 'salary'?", person.hasOwnProperty("salary"));

// 12. Object.freeze() - đóng băng object
let frozenObj = { a: 1, b: 2 };
Object.freeze(frozenObj);
// frozenObj.a = 3; // Sẽ không thay đổi được
console.log("Frozen object:", frozenObj);

// 13. Object.seal() - niêm phong object
let sealedObj = { x: 10, y: 20 };
Object.seal(sealedObj);
sealedObj.x = 30; // Có thể thay đổi giá trị
// sealedObj.z = 40; // Không thể thêm thuộc tính mới
console.log("Sealed object:", sealedObj);
