const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getData() {
  const rows = await db.query(
    "SELECT * FROM municipios ORDER BY id_municipio ASC "
  );
  const data = helper.emptyOrRows(rows);

  return {
    data,
  };
}
async function postData(nombre) {
  try {
    const rows = await db.query(
      `INSERT INTO municipios (nombre_municipio) VALUES ('${nombre}')`
    );
    const data = { Insert: nombre };
    return data;
  } catch (err) {
    return err;
  }
}
async function putData(data) {
  let { id_municipio, nombre_municipio } = data;
  try {
    const rows = await db.query(
      `UPDATE municipios SET nombre_municipio = '${nombre_municipio}' WHERE id_municipio = ${id_municipio};`
    );
    const data = { id_municipio, nombre_municipio };
    return data;
  } catch (err) {
    return err;
  }
}
async function delData(id) {
  try {
    const rows = await db.query(
      `DELETE FROM municipios WHERE id_municipio = ${id};`
    );
    const data = { delete: id };
    return data;
  } catch (err) {
    return err;
  }
}
module.exports = {
  getData,
  postData,
  putData,
  delData,
};
