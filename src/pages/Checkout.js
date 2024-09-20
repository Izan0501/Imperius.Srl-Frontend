import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Checkout = () => {

    const initialProducts = localStorage.getItem
        ('products')
        ? JSON.parse(localStorage.getItem('products'))
        : [];
        
    const total = initialProducts.reduce((acc, current) => {
        return acc + current.amount * current.price;
    }, 0);

    return (
        <>
            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h3 className="website-name">Imperius.Srl</h3>
                            <nav
                                style={{ "--bs-breadcrumb-divider": ">" }}
                                aria-label="breadcrumb"
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link className='text-dark total-price' to='/cart'>Cart</Link>
                                    </li>
                                    &nbsp; /
                                    <li className="breadcrumb-item active total-price" aria-current="page">
                                        Information
                                    </li>
                                    &nbsp; /<li className="breadcrumb-item active total-price">
                                        Shipping
                                    </li>
                                    &nbsp; /
                                    <li className="breadcrumb-item active total-price" aria-current="page">
                                        Payment
                                    </li>
                                </ol>
                            </nav>
                            <h4 className="title total">
                                Contact information
                            </h4>
                            <p className="user-details total">
                            </p>
                            <h4 className="mb-3">Shipping Address</h4>
                            <form
                                className='d-flex flex-wrap gap-15 justify-content-between'
                                action=""
                            >
                                <div className='w-100'>
                                    <select defaultValue={'DEFAULT'} className="form-control form-select" name='' id="">
                                        <option value="DEFAULT" selected disabled>Select Ubication</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='First Name' className="form-control" />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='Last Name' className="form-control" />
                                </div>
                                <div className='w-100'>
                                    <input type='text' placeholder='Address' className="form-control" />
                                </div>
                                <div className='w-100'>
                                    <input type='text' placeholder='Apartment, Floor, etc' className="form-control" />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='City' className="form-control" />
                                </div>
                                <div className='flex-grow-1'>
                                    <select defaultValue={'DEFAULT'} className="form-control form-select" name='' id="">
                                        <option value="DEFAULT" selected disabled>Select State</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='Zipcode' className="form-control" />
                                </div>
                                <div className="w-100 mt-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to='/cart' className='text-dark'><BiArrowBack />&nbsp; &nbsp;Return to Cart</Link>
                                        <Link to='/cart' className='button'>Continue to Shipping</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        {
                            initialProducts.map((product) => {
                                return (
                                    <>
                                        <div className='border-bottom py-4'>
                                            <div className="d-flex gap-10 align-items-center">
                                                <div className='w-75 d-flex gap-10'>
                                                    <div className='w-25 position-relative' >
                                                        <span
                                                            style={{ top: "-10px", right: "-5px" }}
                                                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute">
                                                            {product.amount}
                                                        </span>
                                                        <img className='img-fluid' src={"http://localhost:3977/" + product.image} alt="" />
                                                    </div>
                                                    <div className='d-flex flex-column justify-content-center mt-3'>
                                                        <h5 className="title total-price">
                                                            {product.title}
                                                        </h5>
                                                        <div className='flex-grow-1'>
                                                            <h5 className='total'>${product.price}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border-bottom py-4'>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <p className='total'>Subtotal</p>
                                                <p className='total-price'>$ {product.price * product.amount}</p>
                                            </div>
                                            {/* <div className='d-flex justify-content-between align-items-center'>
                                                <p className='mb-0 total'>Shipping</p>
                                                <p className='mb-0 total-price'>Free</p>
                                            </div> */}
                                        </div>
                                    </>
                                )
                            })
                        }
                        {
                            initialProducts.length == 0
                                ? <>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <p>Empty...</p>
                                    </div>
                                </>
                                : <div className='d-flex justify-content-between align-items-center border-bottom py-4 mt-5'>
                                    <h4 className='total'>Total</h4>
                                    <h5 className='total-price'>$ {total}</h5>
                                </div>
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Checkout