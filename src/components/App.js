import React, { useState, useEffect } from "react";

const MemoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [count, setCount] = useState(0);

  // Add a new todo with content "New todo"
  const addTodo = () => {
    setTodos([...todos, { id: todos.length + 1, content: "New todo" }]);
  };

  // Increment the count value
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Add a memo with input text greater than 5 characters
  const addMemo = () => {
    if (newTodo.length > 5) {
      setTodos([...todos, { id: todos.length + 1, content: newTodo }]);
      setNewTodo("");
    }
  };

  return (
    <div className="app">
      <div className="todos">
        <h2>Todos</h2>
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.content}</li>
          ))}
        </ul>
      </div>

      <div className="counter">
        <h2>Counter</h2>
        <p>{count}</p>
        <button onClick={incrementCount}>Increment</button>
      </div>

      <div className="memo">
        <h2>Memo</h2>
        <input
          type="text"
          placeholder="Enter text (greater than 5 characters)"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addMemo}>Submit</button>
      </div>
    </div>
  );
};

export default MemoApp;
