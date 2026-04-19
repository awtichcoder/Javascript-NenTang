//concat() hoi 2 hay nhiu mang lai voi nhau
const arr1=[1,2,3]
const arr1=[4,5,6]
const// Ví dụ các phương thức mảng với chú thích

// 1. concat: Kết hợp hai hoặc nhiều mảng thành một mảng mới mà không sửa đổi mảng gốc
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = array1.concat(array2); // Kết quả: [1, 2, 3, 4, 5, 6]

// 2. slice: Trả về một bản sao nông của một phần của mảng thành một mảng mới mà không sửa đổi mảng gốc
const original = [1, 2, 3, 4, 5];
const sliced = original.slice(1, 4); // Kết quả: [2, 3, 4] (từ chỉ số 1 đến 3)

// 3. splice: Thay đổi nội dung của mảng bằng cách loại bỏ hoặc thay thế các phần tử hiện có và/hoặc thêm phần tử mới
const fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 1, 'orange'); // Loại bỏ 1 phần tử tại chỉ số 1 và thêm 'orange', kết quả: ['apple', 'orange', 'cherry']

// 4. every: Kiểm tra xem tất cả các phần tử trong mảng có vượt qua bài kiểm tra được triển khai bởi hàm được cung cấp hay không
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0); // Kết quả: true (tất cả số đều chẵn)

// 5. findIndex: Trả về chỉ số của phần tử đầu tiên trong mảng thỏa mãn hàm kiểm tra được cung cấp
const ages = [18, 21, 25, 30];
const index = ages.findIndex(age => age > 20); // Kết quả: 1 (tuổi đầu tiên > 20 ở chỉ số 1)

// 6. toString: Trả về một chuỗi đại diện cho mảng được chỉ định và các phần tử của nó
const colors = ['red', 'green', 'blue'];
const colorString = colors.toString(); // Kết quả: "red,green,blue"