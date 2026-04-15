/* reference types
- Object: là một tập hợp các cặp key-value, trong đó key là một chuỗi và value có thể là bất kỳ kiểu dữ liệu nào, bao gồm cả object khác. Object được sử dụng để lưu trữ và quản lý dữ liệu phức tạp hơn so với các kiểu dữ liệu nguyên thủy.
- Array: là một loại object đặc biệt, được sử dụng để lưu trữ một tập hợp các giá trị có thứ tự. Mỗi giá trị trong mảng được gọi là một phần tử và có thể có bất kỳ kiểu dữ liệu nào, bao gồm cả object khác.
- Function: là một đối tượng có thể được gọi để thực thi một đoạn mã. Function có thể nhận các tham số và trả về một giá trị. Function cũng có thể được gán cho các biến hoặc được truyền làm đối số cho các function khác.
*/
// Object
let person = {
  name: "Nguyen Van A",
  age: 30,
  isStudent: true,
  hobbies: ["reading", "traveling", "coding"],
  address: {
    street: "123 Main St",
    city: "Hanoi",
    country: "Vietnam",
  },
};
console.log(person);
console.log(`pserson.name: ${person.name}`);
console.log(`person.age: ${person.age}`);
console.log(`person.isStudent: ${person.isStudent}`);
console.log(`person.hobbies: ${person.hobbies}`);
console.log(`person.address: ${person.address}`);
console.log("------------------");
// Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(`numbers[0]: ${numbers[0]}`);
console.log(`numbers[1]: ${numbers[1]}`);
console.log(`numbers[2]: ${numbers[2]}`);
console.log(`numbers[3]: ${numbers[3]}`);
console.log(`numbers[4]: ${numbers[4]}`);
console.log("------------------");
// Function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Nguyen Van A"));
console.log(greet("Nguyen Van B"));
