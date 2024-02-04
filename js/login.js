// const loginForm = document.getElementById('loginForm')
const loginForm = document.querySelector('#login-form')

const loginInput = loginForm.querySelector('input')
const hello = document.querySelector('#hello')
const todoFormOpen = document.querySelector('#todo-form')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function handleLogin(event) {
  event.preventDefault()
  console.log('Before adding hidden class')
  loginForm.classList.add(HIDDEN_CLASSNAME)
  console.log('After adding hidden class')
  // loginForm.classList.add(HIDDEN_CLASSNAME)
  console.log(loginForm)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  greeting(username)
}

function greeting(username) {
  hello.innerText = `환영합니다. ${username}님`
  hello.classList.remove(HIDDEN_CLASSNAME)
  todoFormOpen.classList.remove(HIDDEN_CLASSNAME)
}

const savedUserName = localStorage.getItem(USERNAME_KEY)

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', handleLogin)
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME)
  greeting(savedUserName)
}
