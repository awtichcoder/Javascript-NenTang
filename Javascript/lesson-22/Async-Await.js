//  Async/Await no la 1 trang thai c
const testPromise = new Promise((resolve, reject) => {
  // gia lap API
  let callApi = true
  setTimeout(() => {
    if (callApi) {
      resolve(` sau 2 giay da goi API THANH cong`)
    } else {
      reject(` sau 2 giay da goi API that bai`)
    }
  }, 2000)
})
console.log(testPromise) // Promise { <pending> }

// su li async/await
const handleAsyncFunc = async () => {
  try {
    const result = await testPromise
    console.log(result) // khi thanh cong
  } catch (error) {
    console.error(error) // khi that bai
  } finally {
    console.log('hoan tat promise')
  }
}
// thuc thi ham
handleAsyncFunc()

// su dung Async-Await de su ly bat dong bo
console.log(`--------------------------------`)

let fileData = null
console.log('mat 3 s')

const readFileData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(' da xong file xong')
      fileData = 'kiet diep trai'
      resolve(fileData)
    }, 3000)
  })
}
// IIFE
// cu phap (async()=>{})()
;(async () => {
  try {
    const fileData = await readFileData()
    console.log('ket thuc qua trinh doc file du lieu nhan dc la', fileData)
  } catch (error) {
    console.log('ket thuc qua trinh doc file du lieu nhan dc la', error)
  } finally {
    console.log('ket thuc qua trinh doc du lieu')
  }
})()
console.log(`--------------------------------`)

const getListPokemon = async (limit) => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
      { method: 'GET' }
    )
    const pokemon = await res.json()
    console.log('danh sach pokemon:', pokemon)
  } catch (error) {
    console.log(' co loi getListPokemo', error)
  } finally {
    console.log('ket thuch hanh dong')
  }
}
//
getListPokemon(5)
