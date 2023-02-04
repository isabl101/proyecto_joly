import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const urlProveedores = "http://localhost:3100/proveedores";

const CrearProveedores = () => {
    const [nit, setNit] = useState("");
    const [nombre, setNombre] = useState("");
    const [nombreRepresentante, setNombreRepresentante] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [direccion, setDireccion] = useState("");
    const [logo, setLogo] = useState("");
    const navigate = useNavigate();

    const crearProveedor = async (e) => {
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
        await axios.post(urlProveedores, proveedor);
        navigate('/listadoProveedor')
    };

    return (
        <section className="form-register">
            <h4>Crear Proveedor</h4>
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
            <button onClick={crearProveedor} className="btn btn-primary form-control">Guardar</button>

        </section>
    );
};

export default CrearProveedores;