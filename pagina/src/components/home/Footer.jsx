import Logo from './img/logo.png'

const Footer = () => {
    return (
        <footer className="pie-pagina">
            <div className="grupo-1">
                <div className="box">
                    <figure>
                        <a href="#">
                            <img src={Logo} alt="Logo de SLee Dw" />
                        </a>
                    </figure>
                </div>
                <div className="box">
                    <h2>SOBRE NOSOTROS</h2>
                    <a href='#'><p>Contactenos</p></a>
                    <a href='#'><p>Preguntas frecuentes</p></a>
                    <a href='#'><p>Blog</p></a>
                    <a href='#'><p>Quejas y peticiones</p></a>
                </div>
                <div className="box">
                    <h2>SIGUENOS</h2>
                    <div className="red-social">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-instagram"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-youtube"></a>
                    </div>
                    <div>
                        <h2 className='mt-5'>DIRECCIÓN</h2>
                        Cra. 50A #41 - 42, Germania, Itagüi, Antioquia
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>
                    &copy; 2021 <b>JolyApp</b> - Marisabel Marcano Acosta. <br /> CC 1.127.953.171 <br />
                    Grupo - Desarrollo de Software AP6
                </small>
            </div>
        </footer>
    )
}


export default Footer