import React from "react";

function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainter">
        <button onClick={(e) => {
            handleEditTodo(index);
          }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button
          onClick={(e) => {
            handleDeleteTodo(index);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoCard;
