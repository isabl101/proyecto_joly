import producto1 from './img/producto1.jpg'
import producto2 from './img/producto2.jpg'
import producto3 from './img/producto3.jpg'
import producto4 from './img/producto4.jpg'

const Recomendado = () => {
    return (
        <section className="container mt-5 p-4">
            <h2 className="titulo">Recomendados</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src={producto1} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">HUMMUS garbanzos LA BONNE x 220g </h5>

                            <span className='precio'>Precio regular: 16.500 COP</span> <br />
                            <span className='descuento'>Ahora: 15.000 COP</span>

                            <section className='compras'>
                                <button className='carrito'>Agregar al carrito</button>
                                <button className='comprar'>Comprar ahora</button>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={producto2} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">HUMMUS garbanzos GYPSY natural x 200g </h5>

                            <span className='precio'>Precio regular: 20.500 COP</span> <br />
                            <span className='descuento'>Ahora: 18.650 COP</span>

                            <section className='compras'>
                                <button className='carrito'>Agregar al carrito</button>
                                <button className='comprar'>Comprar ahora</button>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={producto3} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">GUACAMOLE BONNYSA x 250g </h5>

                            <span className='precio'>Precio regular: 18.000 COP</span> <br />
                            <span className='descuento'>Ahora: 17.000 COP</span>

                            <section className='compras'>
                                <button className='carrito'>Agregar al carrito</button>
                                <button className='comprar'>Comprar ahora</button>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={producto4} className="card-img-top pt-4" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">GUACAMOLE McCain x 500g </h5>

                            <span className='precio'>Precio regular: 30.450 COP</span> <br />
                            <span className='descuento'>Ahora: 25.000 COP</span>

                            <section className='compras'>
                                <button className='carrito'>Agregar al carrito</button>
                                <button className='comprar'>Comprar ahora</button>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Recomendado