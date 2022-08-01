import { useEffect, useState } from 'react'
import { TodoItem } from './TodoItem'

export function TodoList ({
  search,
  todos,
  setTodos,
  toggleCompleted,
  deleteTodo
}) {
  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(resp => resp.json())
      .then(todosFromServer => setTodos(todosFromServer))
  }, [])

  // Every time this code runs
  // React will check if the array (the second argument), has changed
  // If it changed:
  //   - it runs the returned function first
  //   - then, it runs the new effect
  // If it did not change: NOTHING HAPPENS

  // useEffect(() => {
  //   console.log('EFFECT STARTING!', count)
  //   fetch('http://localhost:3000/todos')
  //     .then(resp => resp.json())
  //     .then(todosFromServer => setTodos(todosFromServer))
  //   return () => console.log('EFFECT ENDING', count)
  // }, [count])

  return (
    <ul>
      {/* <h2 onClick={() => setCount(count + 1)}>{count}</h2> */}
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}
