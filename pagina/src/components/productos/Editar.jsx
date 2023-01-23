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
            <form className="formProductos">
                <input
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                    placeholder="Nombre"
                    className="inputForm"
                    type="text"
                />
                <input
                    onChange={(e) => setDescripcion(e.target.value)}
                    value={descripcion}
                    placeholder="Descripción"
                    className="inputForm"
                    type="text"
                />
                <input
                    onChange={(e) => setValor(e.target.value)}
                    value={valor}
                    placeholder="Valor"
                    className="inputForm"
                    type="text"
                />
                <input
                    onChange={(e) => setCantidad(e.target.value)}
                    value={cantidad}
                    placeholder="Cantidad"
                    className="inputForm"
                    type="text"
                />
                <input
                    onChange={(e) => setfechaVencimiento(e.target.value)}
                    value={fechaVencimiento}
                    placeholder="Fecha de Vencimiento"
                    className="inputForm"
                    type="text"
                />

                <Link to={"/listadoProducto"} id="botonCancelar" className="btn form-control">
                    Cancelar
                </Link>
                <button onClick={actualizarProducto} id="botonActualizar" className="btn form-control">Actualizar</button>
            </form>
    );
};

export default Editar;
