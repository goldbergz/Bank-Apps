const intro = document.querySelector('.intodaction')
const userCard =document.querySelector('.username')
const money = document.querySelector('.money')
let enteredUserName = localStorage.getItem('enteredName')
let enteredUser = JSON.parse(localStorage.getItem(enteredUserName))

intro.textContent = `Hi, ${enteredUser.userName}!`
userCard.textContent = `${enteredUser.userName} ${enteredUser.userSurname}`

money.textContent = enteredUser.userMoney

// localStorage.removeItem("enteredName")
