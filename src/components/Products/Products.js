import React from 'react';
import './Products.css';

const Products = (props) => {
    const { name, img, price, stock } = props.product;
    return (
        <div className="product">
            <div className="products-image">
                <img src={img} alt="" />
            </div>
            <div className="products-details">
                <h4 className="product-title">{name}</h4>
                <p>Price: {price}</p>
                <p>Only {stock} are in stocks</p>
                <p>Category:</p><br></br>
                <button onClick={() => props.purchaseProduct(props.product)} className="purchase">Purchase</button>
                <button onClick={() => props.deleteCart(props.product.key)} className="purchase">Remove from Cart</button>
            </div>
        </div>
    );
};

export default Products;