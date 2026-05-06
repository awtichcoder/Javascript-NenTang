document.addEventListener('user:callToNestedEvent', (event) => {
  console.log(
    'user:callToNestedEvent> user da goi vao nested',
    event.detail.username
  )
})
