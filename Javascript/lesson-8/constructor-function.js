// ham khoi tao
function dev(name) {
  this.name = this.name;
  this.greet = function () {
    console.log(` hello`);
  };
}
const kiet = new dev("kiet (real)");
kiet.greet();
const kiet12 = new dev("kiet (fake)");
kiet12.greet();
