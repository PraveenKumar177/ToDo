// src/App.js
import React, { useState } from 'react';
import './app.css';
import Todo from './todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text }]);
      setText('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
      ))}
    </div>
  );
}

export default App;


