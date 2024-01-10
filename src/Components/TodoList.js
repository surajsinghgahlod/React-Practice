import React, { useState } from 'react';

const TodoList = () => {
  const [data, setData] = useState('');
  const [todos, setTodos] = useState([]);

  const addDataHandler = () => {
    if (data.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, data]);
      setData('');
    }
  };

  const removeDataHandler = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        className="userInput"
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={addDataHandler}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeDataHandler(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

