import { Link } from "react-router-dom"
import Logo from '../home/img/logo.png'
const Header = () => {
  return (
    <section className="navegacion">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand">
            JolyApp
            <img src={Logo} width={50} alt="" />
          </Link>
          <ul className="nav justify-content-end">
            <li className="navItem">
              <Link to ={'/listadoCliente'} className="nav-link">Clientes</Link>
            </li>
            <li className="navItem">
              <Link to={'/listadoProducto'} className="nav-link">Productos</Link>
            </li>
            <li className="navItem">
              <Link to={'/listadoProveedor'} className="nav-link" href>Proveedores</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  )
}

export default Header