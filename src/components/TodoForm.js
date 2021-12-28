import React, { useState, useEffect } from "react";

const initialFormValues = {
  title: "",
  description: "",
};

const TodoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { title, description } = formValues;
  const [error, setError] = useState(null);
  const [succesMessage, setSuccesMessage] = useState(null);

  useEffect(() => {
    if (todoEdit) {
      setFormValues(todoEdit);
    } else {
      setFormValues(initialFormValues);
    }
  }, [todoEdit]);

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };

    setFormValues(changedFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      setError("debes indicar un titulo");
      return;
    }
    if (description.trim() === "") {
      setError("Debes indicar una descripcion");
      return;
    }
    if (todoEdit) {
      //Actualizando
      todoUpdate(formValues);
      setSuccesMessage("Actualizando con exito");
    } else {
      //Agregar tarea
      todoAdd(formValues);
      setSuccesMessage("Agregado con exito");
      setFormValues(initialFormValues);
    }

    setTimeout(() => {
      setSuccesMessage(null);
    }, 2000);

    setError(null);
  };

  return (
    <div>
      <h2 className="text-center display-5">
        {" "}
        {todoEdit ? "Editar tarea" : "Nueva tarea"}
      </h2>
      {todoEdit && (
        <button
          onClick={() => setTodoEdit(null)}
          className="btn btn-sm btn-warning mb-2"
        >
          Cancelar edicion
        </button>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          className="form-control"
          value={title}
          name="title"
          onChange={handleInputChange}
        />

        <textarea
          placeholder="Descripcion"
          className="form-control mt-2"
          value={description}
          name="description"
          onChange={handleInputChange}
        ></textarea>

        <button className="btn btn-primary btn-block mt-2">
          {todoEdit ? "Actualizar tarea" : "Agregar tarea"}
        </button>
      </form>
      {error && <div className="alet alert-danger mt-2">{error}</div>}
      {succesMessage && (
        <div className="alet alert-success mt-2">{succesMessage}</div>
      )}
    </div>
  );
};

export default TodoForm;
