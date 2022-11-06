import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch } from 'react-redux'
import { getProducts } from '../actions/productActions'

export const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());

        dispatch(getProducts());
    }, [dispatch])

    return (
        <Fragment>

            <MetaData title="Lo mejor para tu mascota"></MetaData>

            <h1 id="encabezado_productos">Ultimos Productos</h1>

            <section id="productos" className='container mt-5'>
                <div className='row'>
                    {/*producto 1*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/nutra_gold.jpeg' alt='Nutra gold'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Nutresa Goold</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 5 Reviews</span>
                                </div>
                                <p className='card-text'>$72.000</p><a href='http://localhost:3000' id='view_btn' className='bot btn btn-block'>ver detalle</a>
                            </div >
                        </div >
                    </div >

                    {/*producto 2*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/nutra-nuggets-mantenimiento.jpeg' alt='Nuggets Mantenimiento'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Nutresa Nuggets Mantenimiento</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 2 Reviews</span>
                                </div>
                                <p className='card-text'>$52.000</p><a href='http://localhost:3000' id='view_btn' className='bot btn btn-block'>ver detalle</a>
                            </div >
                        </div >
                    </div >

                    {/*producto 3*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/nutra-nuggets-performance.jpeg' alt='Nuggets Performance'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Nutresa Nuggets Performance</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 12 Reviews</span>
                                </div>
                                <p className='card-text'>$80.000</p><a href='http://localhost:3000' id='view_btn' className='bot btn btn-block'>ver detalle</a>
                            </div >
                        </div >
                    </div >

                    {/*producto 4*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/profesional.jpeg' alt='Nuggets Profesional'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Nutresa Nuggets Profesional</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 7 Reviews</span>
                                </div>
                                <p className='card-text'>$75.000</p><a href='http://localhost:3000' id='view_btn' className='bot btn btn-block'>ver detalle</a>
                            </div >
                        </div >
                    </div >
                </div >
            </section >

        </Fragment >
    )
}
export default Home