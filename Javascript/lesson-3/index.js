console.log("block scope");

const testScope = () => {
  {
    var namvar = "Nguyen Van A";
    let namlet = "Nguyen Van B";
    const namconst = "Nguyen Van C";
    // console.log(namvar);// song
    // console.log(namlet);// song
    // console.log(namconst);// song
  }
  //   console.log(namvar);// song
  //   console.log(namlet);// chet
  //   console.log(namconst);//chet
};

testScope();
