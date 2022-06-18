import React from "react";
import CrudTableRow from "./CrudTableRow";

export default function CrudTable({ data, setDataToEdit, deleteData }) {
  return (
    <>
      <div>
        <h2>Municipios</h2>
        <table>
          <thead>
            <tr>
              <th> ID </th>
              <th> Nombre </th>
              <th> Acciones </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((el) => (
                <CrudTableRow
                  key={el.id_municipio}
                  el={el}
                  setDataToEdit={setDataToEdit}
                  deleteData={deleteData}
                />
              ))
            ) : (
              <tr>
                <td colSpan="3">No Hay datos a mostrar</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
