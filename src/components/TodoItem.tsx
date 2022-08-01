export function TodoItem ({ todo, toggleCompleted, deleteTodo }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <span
        onClick={() => {
          toggleCompleted(todo.id)
        }}
      >
        {todo.text}
      </span>

      <button
        onClick={() => {
          deleteTodo(todo.id)
        }}
      >
        X
      </button>
    </li>
  )
}
