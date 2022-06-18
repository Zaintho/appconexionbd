import React from "react";

export default function CrudTableRow({ el, setDataToEdit, deleteData }) {
  let { id_municipio, nombre_municipio } = el;
  return (
    <>
      <tr>
        <td>{id_municipio}</td>
        <td>{nombre_municipio}</td>
        <td>
          <button onClick={() => setDataToEdit(el)}>Editar</button>
          <button onClick={() => deleteData(id_municipio)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
}
