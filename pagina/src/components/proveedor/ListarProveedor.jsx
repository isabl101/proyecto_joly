import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import Header from '../home/Header'
const urlProveedores = "http://localhost:3100/proveedores";

const ListarProveedor = () => {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    mostrarProveedores();
  }, []);

  const mostrarProveedores = async () => {
    const res = await axios.get(urlProveedores);
    setProveedores(res.data);
    console.log(res.data);
  };

  const eliminarProveedor = async (id) => {
    await axios.delete(`${urlProveedores}/${id}`)
    mostrarProveedores()
  }

  return (
    <section className="container-fluid">
      <Header />
      <h1 className="producto">LISTADO DE PROVEEDORES</h1>
      <table className="table table-secondary table-striped">
        <thead>
          <tr>
            <td>NIT</td>
            <td>Nombre</td>
            <td>Nombre de representante</td>
            <td>Teléfono</td>
            <td>Correo Electrónico</td>
            <td>Dirección</td>
            <td>Logo</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((proveedor) => (
            <tr>
              <td>{proveedor.nit}</td>
              <td>{proveedor.nombre}</td>
              <td>{proveedor.nombreRepresentante}</td>
              <td>{proveedor.telefono}</td>
              <td>{proveedor.correo}</td>
              <td>{proveedor.direccion}</td>
              <td>{proveedor.logo}</td>
              <td>
                <button onClick={() => eliminarProveedor(proveedor.id)} id="botonEliminar" className="btn form-control">Eliminar</button>
                <Link to={`/editarProveedor/${proveedor.id}`} id="botonEditar" className="btn form-control" >Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-grid gap-2 col-6 mx-auto">
        <Link to={'/crearProveedor'} id="botonCrear" className="btn form-control mt-2" >Crear Proveedor</Link>
      </div>
    </section>
  );
};

export default ListarProveedor;