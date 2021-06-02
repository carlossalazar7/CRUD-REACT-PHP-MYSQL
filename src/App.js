import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';


function App() {

  const baseUrl = "http://localhost/apiFrameworks/";
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    await axios.get(baseUrl)
      .then(Response => {
        // asignar al estado
        setData(Response.data);
      })
  }

  // tiempo de vida
  useEffect(() => {
    peticionGet();
  })

  return (
    <div>
      <h1 className="text-center p-3">CRUD PHP-MYSQL/REACT</h1>
      <table className="table table-striped w-50 mx-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Lanzamiento</th>
            <th>Desarrollador</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(e => (
              <tr key={e.id}>
                <td> {e.id} </td>
                <td> {e.nombre} </td>
                <td> {e.lanzamiento} </td>
                <td> {e.desarrollador} </td>
                <td>
                  <button className="btn btn-primary">Edidar</button>
                  <button className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
