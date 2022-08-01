export function AddTodoForm ({ createTodo }) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        createTodo(event.target.text.value)
        event.target.reset()
      }}
    >
      <input
        type='text'
        placeholder='enter todo text...'
        name='text'
        required
        minLength={3}
      />
      <button>ADD TODO</button>
    </form>
  )
}
