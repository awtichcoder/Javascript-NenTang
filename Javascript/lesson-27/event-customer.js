/** Nội dung bài học:
 * 💡 1. Custom Event là gì?
 * 2. Cách tạo và Dispatch (gửi hoặc phát) một Custom Event
 * 3. Truyền dữ liệu vào Custom Event
 * 4. Ứng dụng thực tế của Custom Event
 */
/**
 * 1. Custom Event là gì?
 * Như đã học ở buổi trước, các sự kiện như click, keyup, scroll, ... do trình duyệt sinh ra.
 * Custom Event cho phép chúng ta tự định nghĩa một sự kiện mới, đặt tên tùy ý, và dispatch - gửi nó đi
 * bằng JavaScript.
 */
//2. Cách tạo và Dispatch (gửi hoặc phát) một Custom Event
// tao custom event

const userLogin = new CustomEvent('user:login')

// them su kien lang nghe
document.addEventListener('user:login', () => {
  console.log('user:login> da dang nhap thanh cong')
})
// dispatch custom event
document.dispatchEvent(userLogin)
/**
 *  3. Truyền dữ liệu vào Custom Event:
 * Custom Event hỗ trợ thuộc tính "detail" để chúng ta chứa dữ liệu (payload).
 */
const userLoginData = new CustomEvent('user:loginData', {
  detail: {
    username: 'kiet diep zaiiiiiiii',
    time: new Date().toLocaleTimeString('vi-VN')
  }
})

document.addEventListener('user:loginData', (event) => {
  console.log('user:loginData> da dang nhap thanh cong:', event.detail.username)
  console.log(
    'user:loginData> da dang nhap thanh cong time :',
    event.detail.time
  )
})

document.dispatchEvent(userLoginData)

/**
 *  4. Ứng dụng thực tế của Custom Event
 * Dĩ nhiên đầu tiên có thể nhận thấy đó là khi cần một sự kiện mà mặc định trình duyệt không có, thì
 * chúng ta cần phải tạo Custom Event.
 * Giao tiếp giữa các component độc lập nằm ở những cấu trúc thư mục cách xa nhau, không cần phải import
 * chéo vào nhau.
 * Giao tiếp giữa các phần tử con và cha.
 */

/**
 * Ví dụ dispatch một custom event và ở một nested folder/file lắng nghe nó.
 */
document.dispatchEvent(
  new CustomEvent('user:callToNestedEvent', {
    detail: { username: 'kiett dijdusfhsyfysyfysfy' }
  })
)
