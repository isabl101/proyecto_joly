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
  const [fechaVencimiento, setfechaVencimiento] = useState("");
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
    navigate('/listadoProducto')
  };

  return (
    <section className="form-register">
      <h4>Crear Producto</h4>
      <input
        className="controls"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
        type="text"
        //id="nombre"
        placeholder="Nombre del producto"
      />
      <input
        className="controls"
        onChange={(e) => setDescripcion(e.target.value)}
        value={descripcion}
        type="text"
        //id="descripcion"
        placeholder="Descripción"
      />
      <input
        className="controls"
        onChange={(e) => setValor(e.target.value)}
        value={valor}
        type="text"
        //id="valor" 
        placeholder="Valor"
      />
      <input
        className="controls"
        type="text"
        onChange={(e) => setCantidad(e.target.value)}
        value={cantidad}
        //id="cantidad" 
        placeholder="Cantidad"
      />
      <input
        className="controls"
        onChange={(e) => setfechaVencimiento(e.target.value)}
        value={fechaVencimiento}
        type="date"
        //id="fechaVencimiento"
        placeholder="Fecha de Vencimiento"
      />

      <Link to={"/listadoProducto"} className="btn btn-danger form-control mb-2">
        Cancelar
      </Link>
      <button onClick={crearProducto} className="btn btn-primary form-control">Guardar</button>
    </section>
  );
};

export default Crear;

