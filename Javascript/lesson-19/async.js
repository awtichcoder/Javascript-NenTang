// bai toan dong bo la gi
console.log("dong 1");
console.log("dong 2");
console.log("dong 3");

// bai toan bat doong bo
let fileData = null;
console.log("mat 3 s");
const readFileData = () => {
  setTimeout(() => {
    console.log(" da xong file xong");
    fileData = "kiet diep trai";
  }, 3000);
};
console.log("dang doc du lieu");
readFileData();
// in ra ket qua
console.log("ket thuc qua trinh", fileData);
