import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import Header from '../home/Header'
const urlProductos = "http://localhost:3100/productos";

const Listado = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    mostrarProductos();
  }, []);

  const mostrarProductos = async () => {
    const res = await axios.get(urlProductos);
    setProductos(res.data);
    console.log(res.data);
  };

  const eliminarProducto = async (id) => {
    await axios.delete(`${urlProductos}/${id}`)
    mostrarProductos()
  }

  return (
    <section className="container-fluid p">
      <Header />
      <h1 className="producto">LISTADO DE PRODUCTOS</h1>
      <table className="table table-secondary table-striped">
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Descripción</td>
            <td>Valor</td>
            <td>Cantidad</td>
            <td>Fecha de Vencimiento</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.valor}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.fechaVencimiento}</td>
              <td>
                <button onClick={() => eliminarProducto(producto.id)} id="botonEliminar" className="btn form-control">Eliminar</button>
                <Link to={`/editarProducto/${producto.id}`} id="botonEditar" className="btn form-control" >Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-grid gap-2 col-6 mx-auto">
        <Link to={'/crearProducto'} id="botonCrear" className="btn form-control mt-2" >Crear Producto</Link>
      </div>
    </section>
  );
};

export default Listado;

