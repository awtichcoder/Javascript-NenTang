//  3 trang thai cua Promise :
// //  Pending(dang cho),Fulfilled(thanh cong)
// //  Rejected( that bai)

console.log(`--------------------------------`);

////1. Promise
let testPromise = new Promise((resolve, reject) => {
  // gia lap API
  let callApi = true;
  setTimeout(() => {
    if (callApi) {
      resolve(` sau 2 giay da goi API THANH cong`);
    } else {
      reject(` sau 2 giay da goi API that bai`);
    }
  }, 2000);
});
console.log(testPromise); // Promise { <pending> }

testPromise
  .then((result) => {
    console.log(result); // khi thanh cong
  })
  .catch((error) => {
    console.error(error); // khi that bai
  })
  .finally(() => {
    console.log("hoan tat promise");
  });
console.log(`--------------------------------`);

let fileData = null;
console.log("mat 3 s");

const readFileData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(" da xong file xong");
      fileData = "kiet diep trai";
      resolve(fileData);
    }, 3000);
  });
};
readFileData()
  .then((fileData) => {
    console.log("thanh cong");
  })
  .catch((err) => {
    console.log("that bai");
  })
  .finally(() => {
    console.log("ket thuc");
  });

console.log(`--------------------------------`);

const getListPokemon = (limit = 10) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {
    method: "GET",
  })
    .then((rawResponse) => {
      console.log("rawResponse", rawResponse);
      rawResponse.json().then((pokemon) => {
        console.log("danh sach pokemon", pokemon);
      });
    })
    .catch((error) => {
      console.log(" co loi getListPokemon", error);
    })
    .finally(() => {
      console.log("ket thuch hanh dong");
    });
};
//
getListPokemon(10);
