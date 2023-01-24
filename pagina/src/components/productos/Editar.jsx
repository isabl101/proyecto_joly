import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const urlProductos = "http://localhost:3100/productos";

const Editar = () => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [valor, setValor] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [fechaVencimiento, setfechaVencimiento] = useState("");
    const { id } = useParams()

    const actualizarProducto = async (e) => {
        e.preventDefault()
        const producto = {
            nombre,
            descripcion,
            valor,
            cantidad,
            fechaVencimiento
        };
        await axios.put(`${urlProductos}/${id}`, producto);
        navigate('/listadoProducto')
    };

    const listarProducto = async () => {
        const res = await axios.get(`${urlProductos}/${id}`)
        setNombre(res.data.nombre)
        setDescripcion(res.data.descripcion)
        setValor(res.data.valor)
        setCantidad(res.data.cantidad)
        setCategoria(res.data.fechaVencimiento)
    }

    useEffect(() => {
        listarProducto()
    }, [])

    return (
        <section className="form-register">
            <h4>Actualizar Producto</h4>
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
            <button onClick={actualizarProducto} className="btn btn-primary form-control">Actualizar</button>
        </section>
    );
};

export default Editar;
