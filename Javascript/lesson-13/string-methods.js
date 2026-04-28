// Ví dụ các phương thức chuỗi trong JavaScript
const str1 = "hello world";

// charAt(): trả về ký tự tại vị trí index
console.log(str1.charAt(0)); // h => ký tự đầu tiên
console.log(str1.charAt(6)); // w => ký tự ở vị trí 6
console.log(str1.charAt(10)); // d => ký tự cuối cùng
console.log(str1.charAt(20)); // '' => chỉ số vượt quá độ dài trả về chuỗi rỗng

// length: số ký tự của chuỗi
console.log(str1.length); // 11 => độ dài của chuỗi

// indexOf / lastIndexOf: tìm vị trí xuất hiện của chuỗi con
console.log(str1.indexOf("o")); // 4 => vị trí của 'o' đầu tiên
console.log(str1.lastIndexOf("o")); // 7 => vị trí của 'o' cuối cùng
console.log(str1.indexOf("z")); // -1 => không tìm thấy nên trả về -1

// includes / startsWith / endsWith: kiểm tra sự tồn tại và vị trí
console.log(str1.includes("world")); // true => chuỗi chứa 'world'
console.log(str1.startsWith("hello")); // true => bắt đầu bằng 'hello'
console.log(str1.endsWith("world")); // true => kết thúc bằng 'world'

// slice / substring / substr: cắt chuỗi
console.log(str1.slice(0, 5)); // hello => cắt từ 0 đến 5 (không bao gồm 5)
console.log(str1.substring(6)); // world => cắt từ vị trí 6 đến hết
console.log(str1.slice(6, 11)); // world => cắt từ 6 đến 11
console.log(str1.substr(6, 5)); // world => cắt từ 6 dài 5 ký tự

// toUpperCase / toLowerCase: chuyển hoa/thường
console.log(str1.toUpperCase()); // HELLO WORLD => chuyển thành chữ hoa
console.log(str1.toLowerCase()); // hello world => chuyển thành chữ thường

// trim: loại bỏ khoảng trắng ở đầu và cuối
const padded = "   hello world   ";
console.log(padded.trim()); // "hello world" => xóa khoảng trắng hai bên

// split: chuyển chuỗi thành mảng theo dấu phân cách
console.log(str1.split(" ")); // [ 'hello', 'world' ] => tách theo khoảng trắng

// replace: thay thế lần xuất hiện đầu tiên
console.log(str1.replace("world", "kiet")); // hello kiet => thay 'world' bằng 'kiet'

// concat: nối nhiều chuỗi lại với nhau
const str2 = "hello world";
const str3 = " kiet";
const cs = str2.concat(str3, "!");
console.log(cs); // hello world kiet! => nối thêm ' kiet' và '!'
