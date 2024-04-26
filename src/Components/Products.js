import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader'
import { add } from './store/cartSlice';
import { fetchProducts } from './store/productSlice';
import { STATUSES } from './store/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);


    useEffect(() => {
        dispatch(fetchProducts());

    }, [dispatch]);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading...<Loader /></h2>
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <div className="productsWrapper">
            {products.map((product) => (

                <div className="card" key={product.id}>
                    <div className="image_container">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="title">
                        <span>{product.title}</span>
                    </div>
                    {/* <div className="size">
                        <span>{product.detail}</span>

                    </div> */}
                    <div className="action">
                        <div className="price">
                            <span>₹{product.price}</span>
                        </div>
                        <button className="cart-button" onClick={() => handleAdd(product)} >
                            <span>Add to cart</span>
                        </button>
                    </div>
                </div>


            ))}
        </div>
    );
};

export default Products;