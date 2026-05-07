/**
 * 1. Hiểu câu chuyện lưu trữ dữ liệu phía client trong trình duyệt.
 * Lưu trữ dữ liệu trong trình duyệt là cách để lưu trữ dữ liệu của người dùng trên thiết bị của người dùng đó.
 * Mục đích > Vài ví dụ dễ hiểu:
 * - Giữ trạng thái đã đăng nhập của người dùng.
 * - Giữ các cài đặt của người dùng đó: theme, dark-light mode, i18n ngôn ngữ, giỏ hàng...vv
 * - Nhiều trang web còn lưu các thông tin nhạy cảm hơn để theo dõi bạn và tối ưu quảng cáo =))
 * - Hoặc câu chuyện affiliate, trình duyệt lưu mã affiliate_code của bạn để xử lý tính năng commission.
 * - Phần nào giảm sự phụ thuộc vào phía Server => tối ưu tốc độ trải nghiệm cho người dùng.
 */

/**
 * 2. Phân biệt 3 hình thức lưu trữ: LocalStorage, SessionStorage và Cookie.
 *   LocalStorage:
 * - Dung lượng: ~5MB - 10MB (tùy vào trình duyệt)
 * - Hết hạn: Không bao giờ, chỉ mất khi bị xóa bằng tay từ user hoặc xóa từ code.
 * - Tự động gửi lên Back-end Server: Không.
 * -----------------------------------------------------------
 * SessionStorage:
 * - Dung lượng: ~5MB
 * - Hết hạn: Khi đóng tab của trình duyệt. Kiểu lưu trữ dạng phiên.
 * - Tự động gửi lên Back-end Server: Không.
 * -----------------------------------------------------------
 * Cookie:
 * - Dung lượng: ~4KB
 * - Hết hạn: Tùy theo giá trị expires do dev chúng ta chỉ định.
 * - Tự động gửi lên Back-end Server: Có. (Gửi kèm trong mỗi request)
 */

/**
 * 3. Demo CRUD với LocalStorage, SessionStorage, Cookie.
 */
/** --------------------- */
//LocalStorage luu duoi dang key-value
// create/update
localStorage.setItem('username', 'awtichcoder')
//localStorage.setItem('username', 'awtichcoder123') // ghi de di lieu
localStorage.setItem('role', 'admin')
//Get
console.log(localStorage.getItem('username')) // awtichcoder
console.log(localStorage.getItem('role')) // admin
//Delete one item
localStorage.removeItem('username')
//Delete all items
localStorage.clear()

// luu du lieu JSON
const user = {
  name: 'awtichcoder',
  role: 'admin'
}
// Lưu trữ đối tượng user dưới dạng JSON string
localStorage.setItem('user', JSON.stringify(user))

// Lấy dữ liệu và chuyển ngược lại thành đối tượng
const storedUser = localStorage.getItem('user')
console.log(storedUser) // { name: 'awtichcoder', role: 'admin' }
console.log(typeof storedUser) // string
const userObj = JSON.parse(storedUser)
console.log(userObj) // { name: 'awtichcoder', role: 'admin' }
console.log(typeof userObj) // object

// SessionStorage: tuong tu nhu LocalStorage nhung chi ton tai trong 1 phien lam viec
const saveUsernameToSessionStorage = () => {
  const input = document.getElementById('session-username')
  const sessionUsername = input.value
  if (!sessionUsername) return alert('Please enter a username')

  // Lưu username vào SessionStorage
  sessionStorage.setItem('sessionUsername', sessionUsername)
  console.log(sessionStorage.getItem('sessionUsername')) // hiển thị username đã lưu

  // => Khi đóng/mở một tab mới, nếu chưa set dữ liệu thì sẽ chưa có trong sessionStorage.
  // => Còn nếu dùng localStorage ở đây thì sẽ luôn có kể cả khi đóng/mở tab mới.
}
/** --------------------- */
/** Cookie: Một đoạn dữ liệu nhỏ (tối đa 4KB), tự động gửi lên server mỗi lần gửi request. */
document.cookie = 'username=awtichcoder; expires=Fri, 31 Dec 2026 23:59:59 GMT'

//2 cach set thoi gian het han cookie
const date = new Date()
date.setDate(date.getDate() + 1) // Set expires in 1 day

/**
 * Cần chuyển đổi object Date thành chuỗi ngày giờ theo một chuẩn UTC/GMT (giờ quốc tế). Ví dụ (Fri, 24 Oct 2025 14:00:00 GMT)
 * Do Cookie được gửi kèm trong HTTP Header (Set-Cookie), và HTTP là giao thức quốc tế. Nếu bạn để giờ local tùy quốc gia, thì cookie có thể hết hạn sớm hoặc muộn hơn tùy múi giờ.
 * Vì vậy cần đến chuẩn UTC/GMT để mọi trình duyệt ở bất kỳ quốc gia nào đều hiểu chính xác thời điểm cookie hết hạn.
 */
const expires = date.toUTCString()
document.cookie = `theme=dark; expires=${expires}`

// cach 2 dung max-age
document.cookie = 'isAuthenticated=true; max-age=60 '

// Lấy tất cả cookie hiện tại
console.log(document.cookie) // username=awtichcoder; theme=dark; isAuthenticated=true
/**
 * Thuộc tính path (đường dẫn áp dụng) của Cookie. Ví dụ dễ hiểu:
 * Nếu path=/, cookie có hiệu lực trên toàn trang web.
 * Nếu path=/admin, cookie chỉ có hiệu lực và được gửi kèm trong các request có url bắt đầu bằng /admin.
 */
document.cookie =
  'isAuthenticatedAdmin=true; max-age=120; path=/lesson-30/admin' // cookie này chỉ có hiệu lực trên đường dẫn /lesson-30/admin

// Lấy tất cả cookie hiện tại
console.log(document.cookie) // username=awtichcoder; theme=dark; isAuthenticated=true; isAuthenticatedAdmin=true
// xoa cookie dat thoi gian het han
document.cookie = 'isAuthenticated=true; max-age=0' // max-age=0 hoặc expires trong quá khứ sẽ xóa cookie
console.log(document.cookie) // username=awtichcoder; theme=dark; isAuthenticatedAdmin=true
