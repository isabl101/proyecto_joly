const Recetas = () => {
    return (
        <section className="container">
            <h3 className="titulo">Recetas</h3>
            <table className="table p-2">
                <thead>
                    <tr>
                        <th className="table-primary" scope="col">Plato</th>
                        <td className="encaReceta" scope="col">Descripción</td>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="table-primary" scope="row">Pasta con salsa de hummus</th>
                        <td>Es tan sencillo como aligerar el hummus con un poquito de agua y tendremos una salsa exquisita para nuestra pasta. También puedes mezclarlo con salsa de tomate casera, más tahini, bechamel casera, etc.</td>
                        <button className="botonReceta">Ver</button>
                    </tr>
                    <tr>
                        <th className="table-primary" scope="row">Mariscos rebozados</th>
                        <td>El guacamole es una salsa perfecta para acompañar los pescados y mariscos, especialmente esta suculenta receta de mariscos rebozados.</td>
                        <button className="botonReceta">Ver</button>
                    </tr>
                    <tr>
                        <th className="table-primary" scope="row">Nachos con guacamole y hummus</th>
                        <td>En lugar de poner a tus nachos frijoles o queso vegano, ponle unas buenas cucharadas de hummus, pico de gallo y guacamole.</td>
                        <button className="botonReceta">Ver</button>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Recetas