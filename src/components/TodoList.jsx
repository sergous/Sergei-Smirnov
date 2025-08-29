import React, { useState } from 'react'
    import TodoItem from './TodoItem.jsx'

    function TodoList({ todos, addTodo, toggleTodo, deleteTodo }) {
      const [input, setInput] = useState('')

      const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim()) {
          addTodo(input.trim())
          setInput('')
        }
      }

      return (
        <div>
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new todo"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Add Todo
            </button>
          </form>
          <ul>
            {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            ))}
          </ul>
        </div>
      )
    }

    export default TodoList
