const loginForm = document.getElementById('loginForm')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')

const errEmail = document.querySelector('.error-email')
const errPassword = document.querySelector('.error-password')

// validate  du lieu  khi nhap vao input
emailInput.addEventListener('input', (event) => {
  const emailValue = event.target.value
  if (!emailValue.includes('@')) {
    errEmail.innerHTML = ' Email ko hop loi'
  } else {
    errEmail.innerHTML = ''
  }
})
passwordInput.addEventListener('input', (event) => {
  const passwordValue = event.target.value
  if (passwordValue.length < 6) {
    errPassword.innerHTML = ' password ko hop loi'
  } else {
    errPassword.innerHTML = ''
  }
})

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const emailValue = loginForm.email.value
  const PasswordValue = loginForm.password.value
  // kiem tra
  if (!emailValue.includes('@') || PasswordValue.length < 6) {
    return
  }
  alert(`ban da login thanh cong ${emailValue} va ${PasswordValue}`)
})
