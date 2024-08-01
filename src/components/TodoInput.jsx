import React from "react";
import { useState } from "react";

function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  return (
    <header>
      <input
        id="todoInput"
        name="todoInput"
        placeholder="Enter todo...."
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          console.log(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}

export default TodoInput;
