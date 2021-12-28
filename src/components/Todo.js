import React from "react";

export default function Todo({
  todo,
  todoDelete,
  todoToggleCompleted,
  setTodoEdit,
}) {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h3 className="card-title text-right">
          {todo.title}
          <button
            onClick={() => todoToggleCompleted(todo.id)}
            className={`btn btn-sm ${
              todo.completed ? "btn-outline-success ml-2" : "btn-success ml-2"
            }`}
          >
            {todo.completed ? "Terminado" : " Terminar"}
          </button>
        </h3>
        <p className="card-text text-right ">{todo.description}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <button
            onClick={() => setTodoEdit(todo)}
            className="btn btn-sm btn-outline-primary mr-2"
          >
            Editar
          </button>
          <button
            onClick={() => todoDelete(todo.id)}
            className="btn btn-sm btn-outline-danger"
          >
            {" "}
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
