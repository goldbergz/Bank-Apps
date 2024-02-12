
let userName = document.querySelector('#name')
let userSurname = document.querySelector('#surname')
let form = document.querySelector('#signin')

let users = {}

function User (userName, userSurname, userMoney) {
    this.userName = userName
    this.userSurname = userSurname
    this.userMoney = userMoney
}

function createId (users) {
    return Object.keys(users).length
}

form.onsubmit = function(evt) {
    evt.preventDefault()

    const name = userName.value
    const surname = userSurname.value
    const money = ''
    const user = new User(name, surname, money)

    const userId = 'User' + createId(users)
    users[userId] = user

    localStorage.setItem(name, JSON.stringify(user))
    localStorage.setItem('enteredName', name)

    window.location.href = '/profile/profile.html'
}