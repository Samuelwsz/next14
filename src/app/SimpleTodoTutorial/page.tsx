'use client';

import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface TodoProps {
  id: number;
  text: string;
}

export default function SimpleTodo() {
  const [animationParent] = useAutoAnimate();

  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [inputText, setInputText] = useState('');
  const [editMode, setEditMode] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  function handleAddTodo() {
    if (inputText.trim() !== '') {
      const isExistingTodo = todos.some((todo) => todo.text === inputText);

      if (isExistingTodo) {
        alert('This todo already exists!');
        setInputText('');
        return;
      }
      const newTodo = {
        id: todos.length + 1,
        text: inputText,
      };

      setTodos([...todos, newTodo]);
      setInputText('');
    }
  }

  function handleDeleteTodo(id: number) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function handleEditTodo(id: number) {
    setEditMode(id);

    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setEditText(todoToEdit.text);
    }
  }

  function handleSaveEditedTodo() {
    const updatedTodos = todos.map((todo) =>
      todo.id === editMode ? { ...todo, text: editText } : todo,
    );

    setTodos(updatedTodos);
    setEditMode(null);
  }

  return (
    <div className="h-screen w-full">
      <h2 className="text-2xl font-bold mb-4">Todo App</h2>
      <div>
        <input
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
          type="text"
          placeholder="Add a todo..."
          className="outline-none bg-slate-700 rounded-1 px-4 py-2 bg"
        />
        <button
          onClick={handleAddTodo}
          className="bg-teal-700 text-white px-4 py-2 rounded-r"
        >
          Add
        </button>
      </div>
      <ul ref={animationParent}>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center border-b border-slate-500 justify-between py-2 w-80"
          >
            {editMode === todo.id ? (
              <>
                <input
                  onChange={(e) => setEditText(e.target.value)}
                  value={editText}
                  type="text"
                  placeholder="Edit todo"
                  className="outline-none bg-slate-700 rounded-1 px-4 py-2 bg"
                />
                <button
                  onClick={handleSaveEditedTodo}
                  className="bg-teal-500 text-white px-4 py-2 rounded-r"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                {/* todo add */}
                <span>{todo.text}</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEditTodo(todo.id)}
                    className="text-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
