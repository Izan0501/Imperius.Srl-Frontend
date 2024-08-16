import React from 'react';
import Meta from '../components/Meta';
import CartHeader from '../components/StoreHeader';
import watch from "../images/watch.jpg";
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {
    return (
        <>
            <Meta title={'Cart'} />
            <CartHeader title='Cart' />
            <section className="cart-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                                <h4 className='cart-col-1'>Product</h4>
                                <h4 className='cart-col-2'>Price</h4>
                                <h4 className='cart-col-3'>Quantity</h4>
                                <h4 className='cart-col-4'>Total</h4>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                    <div className="w-25">
                                        <img src={watch} className='img-fluid' alt="watch" />
                                    </div>
                                    <div className="w-100">
                                        <h5 className='title'>Smart Watch Series 7</h5>
                                        <p className="color">Free Shipping</p>
                                        <p className="size">1</p>
                                    </div>
                                </div>
                                <div className="cart-col-2">
                                    <h5 className="price">$ 100</h5>
                                </div>
                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                    <div>
                                        <input
                                            className='form-control'
                                            type="number"
                                            name=""
                                            min={1}
                                            max={10}
                                            id=""
                                        />
                                    </div>
                                    <div>
                                        <AiFillDelete
                                            className='text-danger'
                                        />
                                    </div>
                                </div>
                                <div className="cart-col-4">
                                    <h5 className="price">$ 100</h5>
                                </div>
                            </div>
                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                    <div className="w-25">
                                        <img src={watch} className='img-fluid' alt="watch" />
                                    </div>
                                    <div className="w-100">
                                        <p>Smart Watch Series 7</p>
                                        <p>Free Shipping</p>
                                        <p>1</p>
                                    </div>
                                </div>
                                <div className="cart-col-2">
                                    <h5 className="price">$ 100</h5>
                                </div>
                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                    <div>
                                        <input
                                            className='form-control'
                                            type="number"
                                            name=""
                                            min={1}
                                            max={10}
                                            id=""
                                        />
                                    </div>
                                    <div>
                                        <AiFillDelete
                                            className='text-danger'
                                        />
                                    </div>
                                </div>
                                <div className="cart-col-4">
                                    <h5 className="price">$ 100</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart