// import { getNodeText } from '@testing-library/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Components/store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };
    console.log(products)
    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {products.map((product) => (
                    <div className="card" key={product.id}>
                        <div className="image_container">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="title">
                            <span>{product.title}</span>
                        </div>

                        <div className="action">
                            <div className="price">
                                <span>₹{product.price}</span>
                            </div>
                            <button className="cart-button" onClick={() => handleRemove(product.id)} >
                                <span>Remove</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Cart;