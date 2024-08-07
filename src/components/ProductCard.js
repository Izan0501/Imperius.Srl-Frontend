import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const ProductCard = () => {

    return (
        <div className="col-3">
            <Link className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src="images/wish.svg" alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image">
                    <img src="images/watch.jpg" className='img-fluid' alt="product" />
                    <img src="images/watch1.jpg" className='img-fluid' alt="product" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className="product tittle">
                        kids headphones bulk 10 pak lulti colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        value={4}
                        edit={false}
                    />
                    <Link className="price">$100.00</Link>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                            <img src="images/prodcompare.svg" alt="Compare" />
                        </Link>
                        <Link>
                            <img src="images/view.svg" alt="View" />
                        </Link>
                        <Link>
                            <img src="images/add-cart.svg" alt="addCart" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard
