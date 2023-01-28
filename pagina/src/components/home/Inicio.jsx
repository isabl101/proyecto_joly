import Footer from "./Footer";
import Galeria from "./Galeria";
import Header from "./Header";
import Presentacion from "./Presentacion";
import Recetas from "./Recetas";
import Recomendado from "./Recomendado";
import Servicios from "./Servicios";

const Inicio = () => {
    return (
        <section className="container-fluid">
            <Header />
            <Presentacion />
            <Galeria />
            <Recomendado />
            <Recetas />
            <Servicios />
            <Footer />
        </section>
    )
}


export default Inicio