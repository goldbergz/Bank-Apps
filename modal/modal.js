
const modalReceiveTrigger = document.querySelector('.receive')
const modalCashOutTrigger = document.querySelector('.cash-out')
const modalSendTrgger = document.querySelector('.send')
const modalInput = document.querySelector('input')




let receiveSum

function checkNum() {
    let sum = Number (modalInput.value)

    if(Number.isInteger(sum)) {
        receiveSum = sum
    } else {
        alert('Write a number!')
        return receiveSum = ''
    }
}



// Modal Window Receive

const modalReceiveBackground = document.querySelector('.modalReceive_background')
const modalReceiveActive = document.querySelector('.modalReceive_active')
const modalReceiveClose = document.querySelector('.modalReceive_close')
const modalReceiveButton = document.querySelector('.buttonReceive')
const modalCashOutButton = document.querySelector('.buttonCashOut')


modalReceiveTrigger.addEventListener('click', function () {
    modalReceiveBackground.style.display = 'block'
})

modalReceiveClose.addEventListener('click', function () {
    modalReceiveBackground.style.display = 'none'
    modalInput.value = ''

})

modalReceiveBackground.addEventListener('click', function(event) {
    if (event.target === modalReceiveBackground) {
        modalReceiveBackground.style.display = 'none'
    }
})

modalReceiveButton.addEventListener('click', function () {
    checkNum()

    let moneyM = JSON.parse(localStorage.getItem(enteredUser.userName))
    let moneyHtml = receiveSum + moneyM.userMoney
    money.textContent = moneyHtml
    enteredUser.userMoney = moneyHtml
    console.log(receiveSum)
    localStorage.setItem(enteredUser.userName, JSON.stringify(enteredUser))


    modalReceiveBackground.style.display = 'none'

    modalInput.value = ''

})

modalCashOutButton.addEventListener('click', function () {
    checkNum()

    let moneyM = JSON.parse(localStorage.getItem(enteredUser.userName))
    let moneyHtml = moneyM.userMoney - receiveSum
    money.textContent = moneyHtml
    enteredUser.userMoney = moneyHtml
    console.log(receiveSum)
    localStorage.setItem(enteredUser.userName, JSON.stringify(enteredUser))


    modalReceiveBackground.style.display = 'none'

    modalInput.value = ''

})


// Modal Window Cash Out

// const modalCashOutBackground = document.querySelector('.modalCashOut_background')
// const modalCashOutActive = document.querySelector('.modalCashOut_active')
// const modalCashOutClose = document.querySelector('.modalCashOut_close')
// const modalCashOutButton = document.querySelector('.buttonCashOut')
// const modalCashOutInput = document.querySelector('.modalCashOut_input')


// modalCashOutTrigger.addEventListener('click', function () {
//     modalCashOutBackground.style.display = 'block'
// })

// modalCashOutClose.addEventListener('click', function () {
//     modalCashOutBackground.style.display = 'none'
//     modalInput.value = ''

// })

// modalCashOutBackground.addEventListener('click', function(event) {
//     if (event.target === modalCashOutBackground) {
//         modalCashOutBackground.style.display = 'none'
//     }
// })

// modalCashOutButton.addEventListener('click', function () {
//     // checkNum()
//     let sumC = Number (modalCashOutInput.value)
//     let moneyM = JSON.parse(localStorage.getItem(enteredUser.userName))
//     let moneyHtml = moneyM.userMoney - sumC
//     console.log(sumC)
//     money.textContent = moneyHtml
//     enteredUser.userMoney = moneyHtml
//     localStorage.setItem(enteredUser.userName, JSON.stringify(enteredUser))


//     modalCashOutBackground.style.display = 'none'

//     modalInput.value = ''

// })


// Modal Window Send

const modalSendBackground = document.querySelector('.modalSend_background')
const modalSendActive = document.querySelector('.modalSend_active')
const modalSendClose = document.querySelector('.modalSend_close')

modalSendTrgger.addEventListener('click', function () {
    modalSendBackground.style.display = 'block'
})


modalSendClose.addEventListener('click', function () {
    modalSendBackground.style.display = 'none'
    modalInput.value = ''

})

modalSendBackground.addEventListener('click', function(event) {
    if (event.target === modalSendBackground) {
        modalSendBackground.style.display = 'none'
    }
})