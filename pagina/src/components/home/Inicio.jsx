import Galeria from "./Galeria";
import Header from "./Header";
import Presentacion from "./Presentacion";
import Recetas from "./Recetas";

const Inicio = () => {
    return (
        <section className="container-fluid">
            <Header />
            <Presentacion />
            <Galeria />
            <Recetas />
        </section>
    )
}


export default Inicio