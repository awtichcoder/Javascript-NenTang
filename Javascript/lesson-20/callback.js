//callback
//callback: function
//name string
const greet = (name, callback) => {
  console.log(`hello ${name}`);
  callback();
};
greet(`kiet dz`, () => {
  console.log(`xong roai do`);
});
//
console.log(`--------------------------------`);

let fileData = null;
console.log("mat 3 s");

const readFileData = (callback) => {
  setTimeout(() => {
    console.log(" da xong file xong");
    fileData = "kiet diep trai";
    callback(fileData);
  }, 3000);
};
console.log("dang doc du lieu");
readFileData(() => {
  // in ra ket qua
  console.log("ket thuc qua trinh", fileData);
});

/// goi API
const geListPokemon = (apiEndpoint, callback) => {
  const requestAPI = new XMLHttpRequest();
  requestAPI.open("GET", apiEndpoint);
  requestAPI.onload = () => {
    // goi API thanh cong
    if (requestAPI.status >= 200 && requestAPI.status <= 299) {
      const responseData = JSON.parse(requestAPI.responseText);
      callback(responseData);
    }
  };
  requestAPI.send();
};
geListPokemon(` https://pokeapi.co/api/v2/pokemon?limit=10`, (responseData) => {
  console.log(`responseData`, responseData);
  document.getElementById(`List-pokemon`).innerHTML = responseData.results
    .map((pokemon) => `<li>${pokemon.name}</li>`)
    .join("");
});
// callback hell
const getPokemonDetail = (apiEndpoint, callback) => {
  const requestAPI = new XMLHttpRequest();
  requestAPI.open("GET", apiEndpoint);
  requestAPI.onload = () => {
    // goi API thanh cong
    if (requestAPI.status >= 200 && requestAPI.status <= 299) {
      const responseData = JSON.parse(requestAPI.responseText);
      callback(responseData);
    }
  };
  requestAPI.send();
};
geListPokemon(` https://pokeapi.co/api/v2/pokemon?limit=10`, (responseData) => {
  console.log(`responseData`, responseData);
  document.getElementById(`List-pokemon`).innerHTML = responseData.results
    .map((pokemon) => `<li>${pokemon.name}</li>`)
    .join("");
  const charizard = responseData.results.find(
    (pokemon) => pokemon.name === `charizard`,
  );
  if (charizard) {
    getPokemonDetail(charizard.url, (charizardDetail) => {
      console.log(`charizardDetail`, charizardDetail);
      document.getElementById(`pokemon-detail`).innerHTML =
        JSON.stringify(charizardDetail);
    });
  }
});
