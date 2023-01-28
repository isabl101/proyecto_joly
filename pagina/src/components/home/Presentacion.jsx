import imagen1 from './img/imagen1.webp'

const Presentacion = () => {
    return (
        <section className='presentacion'>
            <div className="clearfix m-4">
                <img src={imagen1} className="col-md-6 float-md-end mt-5 mb-3 ms-md-3" alt="..." />

                <div className="card text-center mb-2" id='infor'>
                    <div className="card-body">
                        <h3 className="card-title">Quiénes somos</h3>
                        <p className="card-text">Somos una empresa Colombiana del sector líder y especializada en la transformación de aguacate y hummus premium listo para consumo, producto elaborado siguiendo las más estrictas normas de calidad e higiene.</p>
                    </div>
                </div>

                <div className="card text-center mb-2" id='mision'>
                    <div className="card-body">
                        <h3 className="card-title">Misión</h3>
                        <p className="card-text">Convertirnos en el mejor aliado de nuestros clientes, brindándoles alimentos de calidad; contribuyendo con la productividad y eficiencia de los mismos; responsable con nuestros socios, colaboradores, clientes y el medio ambiente.</p>
                    </div>
                </div>

                <div className="card text-center mb-2" id='vision'>
                    <div className="card-body">
                        <h3 className="card-title">Visión</h3>
                        <p className="card-text">Ser el líder a nivel nacional en la fabricación, distribución y comercialización de productos alimenticios y reconocidos por la calidad de los mismos.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Presentacion

