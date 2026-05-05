console.log('ket dc')
const updateDom = () => {
  const username = document.getElementById('username')
  const skills1 = document.querySelectorAll('.skill')
  //1 thay doi content

  username.innerHTML = 'awtich coder diep trai'
  skills1.forEach((skill) => (skill.innerHTML = 'skill update'))

  //2 thay doi cac thuoc tinh cua html
  const profileImg = document.getElementById('profile-img')
  // thay doi the img
  profileImg.setAttribute(
    'src',
    'https://wp-cms-media.s3.ap-east-1.amazonaws.com/hoi_chung_ke_mao_danh_impostor_syndrome_trong_gioi_coder_la_gi_e7aabd10d9.jpg'
  )
  // lay thuoc tinh
  console.log(profileImg.getAttribute('src'))

  // thay doi thuoc tinh href cua the a
  const hq = document.getElementById('kietdev')
  hq.innerHTML = ' kiet de thuong siu cuti'
  hq.setAttribute('href', '')
  // xoa thuoc tinh
  hq.removeAttribute('target')
  // 3 thay doi css phan tu
  // thay doi truc tiep thong qua style
  username.style.color = 'red'
  username.style.fontSize = '20px'
  skills1.forEach((skill) => (skill.style.color = 'orange'))

  // ngoai ra thay doi them xoa tu do style an theo class
  //   username.classList.add('KietDv')
  //   username.classList.remove('KietDv')
  // tu chuyen doi giua them va xoa co thi xoa ko co thi them
  username.classList.toggle('KietDv')

  //4 them sua xoa 1 cai phan tu
  // tao div
  const newDiv = document.createElement('div')
  newDiv.innerHTML = 'New Div By js'
  // them phan tu vao body
  document.body.appendChild(newDiv) // dua vao cuoi the body
  // dua vao trong the div khac
  document.getElementById('parent-div').appendChild(newDiv).style.color = 'red'
  // xoa di tu phan ru cha
  document.body.removeChild(newDiv)
  // xoa truc tiep phan ru
  username.remove()
}
