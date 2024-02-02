const loginForm = document.querySelector('#login-form')
const loginInput = loginForm.querySelector('input')
const hello = document.querySelector('#hello')
const todoFormOpen = document.querySelector('#todo-form')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function reload() {
  window.location.reload()
}

function handleLogin(event) {
  event.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  greeting(username)
  window.location.reload()
}

function greeting(username) {
  hello.innerText = `환영합니다. ${username}님`
  hello.classList.remove(HIDDEN_CLASSNAME)
  todoFormOpen.classList.remove(HIDDEN_CLASSNAME)
}

const savedUserName = localStorage.getItem(USERNAME_KEY)

console.log(savedUserName)

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', handleLogin)
} else {
  greeting(savedUserName)
}
