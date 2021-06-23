const toggleList = document.getElementById('toggleList')
const listDiv = document.querySelector('.list')
const descriptionInput = document.querySelector('input.description')
const descriptionP = document.querySelector('p.description')
const descriptionButton = document.querySelector('button.description')
const addItemInput = document.querySelector('input.addItemInput')
const addItemButton = document.querySelector('button.addItemButton')
const deleteItemButton = document.querySelector('button.deleteItemButton')

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'HIDE LIST'
    listDiv.style.display = 'block'
  } else {
    toggleList.textContent = 'SHOW LIST'
    listDiv.style.display = 'none'
  }
})

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value
  descriptionInput.value = ''
})

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0]
  let li = document.createElement('li')
  li.textContent = addItemInput.value
  ul.appendChild(li)
  addItemInput.value = ''
})

deleteItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0]
  let li = document.querySelector('li:last-child')
  ul.removeChild(li)
})


