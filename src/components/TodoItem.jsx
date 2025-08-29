import React from 'react'

    function TodoItem({ todo, toggleTodo, deleteTodo }) {
      return (
        <li className="flex items-center justify-between p-2 border-b border-gray-200">
          <span
            onClick={() => toggleTodo(todo.id)}
            className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </li>
      )
    }

    export default TodoItem
