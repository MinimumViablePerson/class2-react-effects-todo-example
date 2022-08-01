import { useState } from 'react'
import './App.css'

import { AddTodoForm } from './components/AddTodoForm'
import { SearchBar } from './components/SearchBar'
import { Title } from './components/Title'
import { TodoList } from './components/TodoList'

function App () {
  const [search, setSearch] = useState('')
  const [todos, setTodos] = useState([])

  function toggleCompleted (id: number) {
    // copy
    let todosCopy = structuredClone(todos)

    // change
    // update the copy
    const match = todosCopy.find(todo => todo.id === id)
    match.completed = !match.completed

    // updating the server
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(match)
    })

    // update state
    setTodos(todosCopy)
  }

  function deleteTodo (id: number) {
    const todosCopy = todos.filter(todo => todo.id !== id)

    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE'
    })

    setTodos(todosCopy)
  }

  function createTodo (text: string) {
    let newTodo = {
      text: text,
      completed: false
    }

    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(resp => resp.json())
      .then(todoFromServer => {
        setTodos([...todos, todoFromServer])
      })
  }

  return (
    <div className='App'>
      <Title />
      <SearchBar setSearch={setSearch} />
      <AddTodoForm createTodo={createTodo} />
      <TodoList
        search={search}
        todos={todos}
        setTodos={setTodos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default App
