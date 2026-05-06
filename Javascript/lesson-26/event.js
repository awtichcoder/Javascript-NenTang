// gan events su kien
console.log('-----------------------')
// 1.viet su kien truc tiep trong html
// 2. gan su kien thong qua js
const btn = document.querySelector('.btn')
if (btn) {
  //   btn.onclick = () => {
  //     alert(' ban vua lichhhh cao bt2')
  //   }
  btn.addEventListener('click', () => {
    alert(' ban vua lichhhh cao 2bt2')
  })
}
console.log('-----------------------')
/**
 * 4.  Common Mouse Events in JavaScript
 *
 *  click      -> Nhấn chuột trái vào phần tử
 *  dblclick   -> Nhấn đúp chuột (Double click)
 *  mouseover  -> Rê chuột vào phần tử
 *  mouseout   -> Rê chuột ra khỏi phần tử
 *  mousedown  -> Giữ nút chuột xuống
 *  mouseup    -> Nhả nút chuột ra
 */
/** @type {HTMLElement} */
const box = document.querySelector('.box')
if (box) {
  box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'red'
    box.style.cursor = 'wait'
  })
  box.addEventListener('mouseout', () => {
    box.style.backgroundColor = 'burlywood'
  })
}
/**
 * ---- ban phim
 *  keyup    -> tha phim ra
 * keydown -> nhan xuong 1 phim
 */
document.addEventListener('keydown', (event) => {
  console.log(`ban vua bam vao phim: ${event.key}`)
})
/**
 * --- Form ---
 * submit: Khi form được gửi
 * change: Khi giá trị input thay đổi
 * focus: Khi phần tử được chọn (focus vào)
 * blur: Khi phần tử mất focus
 */
const myForm = document.querySelector('.myForm')
if (myForm) {
  myForm.addEventListener('submit', (event) => {
    event.preventDefault() // ngan reload ttrang
    alert('ban vua submit ')
  })
}
/**
 * --- Page & Document ---
 * load: Khi trang hoặc tài nguyên tải xong
 * scroll: Khi người dùng cuộn trang
 * resize: Khi thay đổi kích thước cửa sổ trình duyệt
 */
window.addEventListener(scroll, () => {
  console.log('ban daonf cuon trang')
})
document.addEventListener('click', (event) => {
  console.log(event)
  console.log(event.target) // phan tu ma chung ta click den
  console.log(event.type) // click
})
