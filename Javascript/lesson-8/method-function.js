// ham phuong thuc
let dev = {
  name: "kiet dev",
  age: 10,
  gennder: "male",
  country: "VietNam",
  hobbies: ["hesf", "erad", "eree"],
  greet: () => {
    console.log(`hello, ${this.name}`); // khong co this
  },
};
