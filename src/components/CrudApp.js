import React, { useState, useEffect } from "react";
import { helpHtttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

export default function CrudApp() {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [operation, setOperation] = useState(false);

  let api = helpHtttp();
  let url = "http://localhost:3000";

  useEffect(() => {
    setLoading(true);
    api.get(`${url}/municipios`).then((res) => {
      if (!res.err) {
        let { data } = res;
        setDb(data);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
      setLoading(false);
      setOperation(false);
    });
  }, [url, operation]);

  const createData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.post(`${url}/postData`, options).then((res) => {
      if (!res.err) {
        setOperation(true);
      } else {
        setError(res);
        setDb(null);
      }
    });
  };
  const updateData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.put(`${url}/putData`, options).then((res) => {
      if (!res.err) {
        setOperation(true);
      } else {
        setError(res);
        setDb(null);
      }
    });
  };
  const deleteData = (id) => {
    let confirm = window.confirm("¿Está seguro de eliminar el registro?");
    if (confirm) {
      let options = {
        body: { id },
        headers: { "content-type": "application/json" },
      };
      api.del(`${url}/delData`, options).then((res) => {
        if (!res.err) {
          setOperation(true);
        } else {
          setError(res);
          setDb(null);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error: ${error.err} Status: ${error.status} StatusText: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {!loading && db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
}
