// Ví dụ về mảng (array) trong JavaScript

// Khởi tạo mảng chứa các số
const numbers = [1, 2, 3, 4, 5];
console.log("Mảng numbers:", numbers);

// Lấy phần tử trong mảng theo chỉ số (index)
console.log("Phần tử đầu tiên:", numbers[0]);
console.log("Phần tử cuối cùng:", numbers[numbers.length - 1]);

// Thêm phần tử vào cuối mảng
numbers.push(6);
console.log("Sau khi thêm 6:", numbers);

// Xóa phần tử cuối cùng
const removed = numbers.pop();
console.log("Phần tử đã xóa:", removed);
console.log("Mảng hiện tại:", numbers);

// Duyệt mảng bằng for...of
for (const value of numbers) {
  console.log("Giá trị trong mảng:", value);
}

// Mảng chứa nhiều kiểu dữ liệu
const mixedArray = [1, "hai", true, { name: "Ba" }];
console.log("Mảng hỗn hợp:", mixedArray);
