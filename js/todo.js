const todoForm = document.querySelector('#todo-form')
const todoInput = todoForm.querySelector('input')
const todoList = document.querySelector('#todo-list')

const TODOS_KEY = 'todos'

let toDos = []

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(event) {
  const li = event.target.parentElement
  li.remove()
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
  saveTodos()
}

function newTodo(todoValue) {
  const li = document.createElement('li')
  li.id = todoValue.id
  const span = document.createElement('span')
  span.innerText = todoValue.text
  const button = document.createElement('button')
  button.innerText = '❌'
  button.addEventListener('click', deleteTodo)
  li.appendChild(span)
  li.appendChild(button)
  todoList.appendChild(li)
}

function handleNewTodo(event) {
  event.preventDefault()
  const todoValue = todoInput.value
  todoInput.value = ''
  const todoValueObj = {
    text: todoValue,
    id: Date.now(),
  }
  toDos.push(todoValueObj)
  newTodo(todoValueObj)
  saveTodos()
}

todoForm.addEventListener('submit', handleNewTodo)

const savedTodos = localStorage.getItem(TODOS_KEY)

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos)
  toDos = parsedTodos
  parsedTodos.forEach(newTodo)
}
