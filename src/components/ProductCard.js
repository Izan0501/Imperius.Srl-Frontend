import React from 'react'
// import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg"
import wishlist from "../images/wishlist.svg"
import watch from "../images/watch.jpg"
import watch2 from "../images/watch1.jpg"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"

const ProductCard = (props) => {

    const {title, description, price, image} = props.item;

    const { grid } = props
    const location = useLocation();

    return (
        <>
            <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link to={`${location.pathname === '/' ? '/product/:id' : location.pathname === '/product/:id' ? 'product/1' : ':id'}`} className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src={wish} alt="wishlist" />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img src={image} className='img-fluid' alt={image} />
                        <img src='' className='img-fluid' alt="product" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">NEW</h6>
                        <h5 className="product tittle">
                            {title}
                        </h5>
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            {description}
                        </p>
                        <Link className="price">${price}</Link>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src={prodcompare} alt="Compare" />
                            </Link>
                            <Link>
                                <img src={view} alt="View" />
                            </Link>
                            <Link>
                                <img src={addcart} alt="addCart" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard
