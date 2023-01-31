import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const urlClientes = "http://localhost:3100/clientes";

const EditarCliente = () => {
    const [documento, setDocumento] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [barrio, setBarrio] = useState("");
    const [direccion, setDireccion] = useState("");
    const [foto, setFoto] = useState("");
    const { id } = useParams()

    const actualizarCliente = async (e) => {
        e.preventDefault()
        const cliente = {
            documento,
            nombre,
            apellido,
            telefono,
            correo,
            barrio,
            direccion,
            foto,
        };
        await axios.put(`${urlClientes}/${id}`, cliente);
        navigate('/listadoCliente')
    };

    const listarCliente = async () => {
        const res = await axios.get(`${urlClientes}/${id}`)
        setDocumento(res.data.documento)
        setNombre(res.data.nombre)
        setApellido(res.data.apellido)
        setTelefono(res.data.telefono)
        setCorreo(res.data.correo)
        setBarrio(res.data.barrio)
        setDireccion(res.data.direccion)
        setFoto(res.data.foto)
    }

    useEffect(() => {
        listarCliente()
    }, [])

    return (
        <section className="form-register">
            <h4>Actualizar Cliente</h4>
            <input
                className="controls"
                onChange={(e) => setDocumento(e.target.value)}
                value={documento}
                type="text"
                //id="nombre"
                placeholder="Documento del cliente"
            />
            <input
                className="controls"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
                type="text"
                //id="nombre"
                placeholder="Nombre del cliente"
            />
            <input
                className="controls"
                onChange={(e) => setApellido(e.target.value)}
                value={apellido}
                type="text"
                //id="descripcion"
                placeholder="Apellido"
            />
            <input
                className="controls"
                onChange={(e) => setTelefono(e.target.value)}
                value={telefono}
                type="text"
                //id="valor" 
                placeholder="Telefono"
            />
            <input
                className="controls"
                type="text"
                onChange={(e) => setCorreo(e.target.value)}
                value={correo}
                //id="cantidad" 
                placeholder="Correo"
            />
            <input
                className="controls"
                onChange={(e) => setBarrio(e.target.value)}
                value={barrio}
                type="text"
                //id="fechaVencimiento"
                placeholder="Barrio"
            />
            <input
                className="controls"
                onChange={(e) => setDireccion(e.target.value)}
                value={direccion}
                type="text"
                //id="fechaVencimiento"
                placeholder="Direccion"
            />
            <input
                className="controls"
                onChange={(e) => setFoto(e.target.value)}
                value={foto}
                type="file"
                //id="fechaVencimiento"
                placeholder="Foto"
            />

            <Link to={"/listadoCliente"} className="btn btn-danger form-control mb-2">
                Cancelar
            </Link>
            <button onClick={actualizarCliente} className="btn btn-primary form-control">Actualizar</button>
        </section>
    );
};

export default EditarCliente;