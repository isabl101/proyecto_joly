import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const urlProveedores = "http://localhost:3100/proveedores";

const EditarProveedor = () => {
    const [nit, setNit] = useState("");
    const [nombre, setNombre] = useState("");
    const [nombreRepresentante, setNombreRepresentante] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [direccion, setDireccion] = useState("");
    const [logo, setLogo] = useState("");
    const { id } = useParams()

    const actualizarProveedor = async (e) => {
        e.preventDefault()
        const proveedor = {
            nit,
            nombre,
            nombreRepresentante,
            telefono,
            correo,
            direccion,
            logo,
        };
        await axios.put(`${urlProveedores}/${id}`, proveedor);
        navigate('/listadoProveedor')
    };

    const listarProveedor = async () => {
        const res = await axios.get(`${urlProveedores}/${id}`)
        setNit(res.data.nit)
        setNombre(res.data.nombre)
        setNombreRepresentante(res.data.nombreRepresentante)
        setTelefono(res.data.telefono)
        setCorreo(res.data.correo)
        setDireccion(res.data.direccion)
        setLogo(res.data.logo)
    }

    useEffect(() => {
        listarProveedor()
    }, [])

    return (
        <section className="form-register">
            <h4>Actualizar Proveedor</h4>
            <input
                className="controls"
                onChange={(e) => setNit(e.target.value)}
                value={nit}
                type="text"
                placeholder="NIT del proveedor"
            />
            <input
                className="controls"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
                type="text"
                placeholder="Nombre del proveedor"
            />
            <input
                className="controls"
                onChange={(e) => setNombreRepresentante(e.target.value)}
                value={nombreRepresentante}
                type="text"
                placeholder="Nombre del representante"
            />
            <input
                className="controls"
                onChange={(e) => setTelefono(e.target.value)}
                value={telefono}
                type="text" 
                placeholder="Teléfono"
            />
            <input
                className="controls"
                type="text"
                onChange={(e) => setCorreo(e.target.value)}
                value={correo}
                placeholder="Correo"
            />
            <input
                className="controls"
                onChange={(e) => setDireccion(e.target.value)}
                value={direccion}
                type="text"
                placeholder="Direccion"
            />
            <input
                className="controls"
                onChange={(e) => setLogo(e.target.value)}
                value={logo}
                type="file"
                placeholder="Logo"
            />

            <Link to={"/listadoProveedor"} className="btn btn-danger form-control mb-2">
                Cancelar
            </Link>
            <button onClick={actualizarProveedor} className="btn btn-primary form-control">Actualizar</button>
        </section>
    );
};

export default EditarProveedor;