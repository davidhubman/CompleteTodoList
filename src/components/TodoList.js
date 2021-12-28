import React from "react";
import Todo from "./Todo";

export default function TodoList({
  todos,
  todoDelete,
  todoToggleCompleted,
  setTodoEdit,
}) {
  return (
    <div>
      <h2 className="text-right display-4"> soy todo list</h2>
      {todos.length === 0 ? (
        <div className="alert alert-primary">
          No hay tareas. Porfavor agrega una{":)"}
        </div>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            todoDelete={todoDelete}
            todoToggleCompleted={todoToggleCompleted}
            setTodoEdit={setTodoEdit}
          />
        ))
      )}
    </div>
  );
}
