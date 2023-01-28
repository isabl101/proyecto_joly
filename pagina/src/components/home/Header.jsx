const Header = () => {
  return (
    <section className="navegacion">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            JolyApp
          </a>
          <ul className="nav justify-content-end">
            <li className="navItem">
              <a className="nav-link" href="#">Clientes</a>
            </li>
            <li className="navItem">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="navItem">
              <a className="nav-link" href="#">Proveedores</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  )
}

export default Header