import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import Header from '../home/Header'
const urlClientes = "http://localhost:3100/clientes";

const ListarCliente = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        mostrarClientes();
    }, []);

    const mostrarClientes = async () => {
        const res = await axios.get(urlClientes);
        setClientes(res.data);
        console.log(res.data);
    };

    const eliminarCliente = async (id) => {
        await axios.delete(`${urlClientes}/${id}`)
        mostrarClientes()
    }

    return (
        <section className="container-fluid">
            <Header />
            <h1 className="producto">LISTADO DE CLIENTES</h1>
            <table className="table table-secondary table-striped">
                <thead>
                    <tr>
                        <td>Documento</td>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Teléfono</td>
                        <td>Correo</td>
                        <td>Barrio </td>
                        <td>Dirección</td>
                        <td>Foto</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr>
                            <td>{cliente.documento}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellido}</td>
                            <td>{cliente.telefono}</td>
                            <td>{cliente.correo}</td>
                            <td>{cliente.barrio}</td>
                            <td>{cliente.direccion}</td>
                            <td>{cliente.foto}</td>
                            <td>
                                <button onClick={() => eliminarCliente(cliente.id)} id="botonEliminar" className="btn form-control">Eliminar</button>
                                <Link to={`/editarCliente/${cliente.id}`} id="botonEditar" className="btn form-control" >Editar</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-grid gap-2 col-6 mx-auto">
                <Link to={'/crearCliente'} id="botonCrear" className="btn form-control mt-2" >Crear Cliente</Link>
            </div>
        </section>
    );
};


export default ListarCliente