let result = document.querySelector(".calculator").children[0]

let num1 = document.querySelector(".calculator").children[1].children[0]
let num2 = document.querySelector(".calculator").children[1].children[1]

let add = document.querySelector(".calculator").children[2].children[0]
let minus = document.querySelector(".calculator").children[2].children[1]
let multiple = document.querySelector(".calculator").children[2].children[2]
let divide = document.querySelector(".calculator").children[2].children[3]

let reset = document.querySelector(".calculator").children[3]

add.addEventListener('click', addFunction)
minus.addEventListener('click', minusFunction)
multiple.addEventListener('click', multipleFunction)
divide.addEventListener('click', divideFunction)
reset.addEventListener('click', resetFunction)


function addFunction() {
    result.value = parseInt(num1.value) + parseInt(num2.value)
    num1.value = result.value
    num2.value = ""
    num2.focus()
}

function minusFunction() {
    result.value = parseInt(num1.value) - parseInt(num2.value)
    num1.value = result.value
    num2.value = ""
    num2.focus()
}

function multipleFunction() {
    result.value = parseInt(num1.value) * parseInt(num2.value)
    num1.value = result.value
    num2.value = ""
    num2.focus()
}

function divideFunction() {
    result.value = parseInt(num1.value) / parseInt(num2.value)
    num1.value = result.value
    num2.value = ""
    num2.focus()
}

function resetFunction() {
    num1.value = ""
    num2.value = ""
    result.value = ""
    num1.focus()
}