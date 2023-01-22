import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const urlProductos = "http://localhost:3100/productos";

const Crear = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [valor, setValor] = useState("");
  const [cantidad, setCantidad] = useState("");
  const navigate = useNavigate();

  const crearProducto = async (e) => {
    e.preventDefault()
    const producto = {
      nombre,
      descripcion,
      valor,
      cantidad,
      fechaVencimiento,
    };
    await axios.post(urlProductos, producto);
    navigate('/productos')
  };

  return (
    <section className="container bg-warning p-5">
      <form className="form-control p-5">
        <section className="row">
          <section className="col">
            <input
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              placeholder="Nombre"
              className="form-control"
              type="text"
            />
            <input
              onChange={(e) => setDescripcion(e.target.value)}
              value={descripcion}
              placeholder="Descripcion"
              className="form-control"
              type="text"
            />
            <input
              onChange={(e) => setValor(e.target.value)}
              value={valor}
              placeholder="Valor"
              className="form-control"
              type="text"
            />
            <input
              onChange={(e) => setCantidad(e.target.value)}
              value={cantidad}
              placeholder="Cantidad"
              className="form-control"
              type="text"
            />
            <input
              onChange={(e) => setFechaVencimiento(e.target.value)}
              value={FechaVencimiento}
              placeholder="Fecha de Vencimiento"
              className="form-control"
              type="text"
            />
          </section>
        </section>
        <section className="row">
          <Link to={"/productos"} className="btn btn-danger form-control">
            Cancelar
          </Link>
          <button onClick={crearProducto} className="btn btn-success form-control">Guardar</button>
        </section>
      </form>
    </section>
  );
};

export default Crear;