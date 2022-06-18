import React, { useState, useEffect } from "react";

const initialForm = {
  id_municipio: null,
  nombre_municipio: "",
};

export default function CrudForm({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit === null) {
      setForm(initialForm);
    } else {
      setForm(dataToEdit);
    }
  }, [dataToEdit]);

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id_municipio === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };
  return (
    <>
      <article>
        <h2>{dataToEdit === null ? "Agregar" : "Editar"}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="id_municipio">ID: </label>
          <input
            type="text"
            id="id_municipio"
            name="id_municipio"
            placeholder="ID Automático"
            disabled
          />
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            id="nombre_municipio"
            name="nombre_municipio"
            placeholder="Ingresa el nombre..."
            onChange={handleOnChange}
            value={form.nombre_municipio}
            required
          />
          <input
            type="submit"
            value={dataToEdit === null ? "Agregar" : "Finalizar"}
          />
          <input type="reset" value="Limpiar" onClick={handleReset} />
        </form>
      </article>
    </>
  );
}
