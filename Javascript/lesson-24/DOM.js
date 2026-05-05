console.log('DOM keiet dz')
// lay phan tu tu id html
const username = document.getElementById('username')

//truy cap toi phan tu dau tien khop voi class
const skill = document.querySelector('.skill')

// truy cap toi nhieu phan  tu co cung class name
const skills1 = document.querySelectorAll('.skill')
const skills2 = document.getElementsByClassName('skill')

// truy cap toi nhieu phan tu co cung tag name
const TagName = document.getElementsByTagName('div')

console.log('username', username)
console.log('-----')
console.log('skill', skill)
console.log('-----')
console.log('skills1', skills1)
console.log('-----')
console.log('skills2', skills2)
console.log('-----')
console.log('TagName', TagName)

// querySelectorAll :NodeList va getElementsByClassName: HTMLCollection

/// NodeList
for (const skill of skills1) {
  console.log('skill > NodeList', skill)
}
console.log('-----')

// khac
skills1.forEach((skill) => console.log('skill > NodeList', skill))
//HTMLCollection
for (const skill of skills2) {
  console.log('skill > HTMLCollection', skill)
}
console.log('-----')
// khac
Array.from(skills2).forEach((skill) =>
  console.log('skill > HTMLCollection', skill)
)
