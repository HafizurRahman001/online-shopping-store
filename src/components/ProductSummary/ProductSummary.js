import React from 'react';
import './ProductSummary.css'

const ProductSummary = (props) => {
    const price = props.cart.reduce((existing, product) => existing + product.price, 0);

    let shipping = 0;
    if (price > 60 && price < 100) {
        shipping = shipping + 15;
    }
    else if (price > 100 && price < 500) {
        shipping += 25;
    }
    else if (price > 500 && price < 800) {
        shipping += 30;
    }
    else {
        shipping += 50;
    }

    const tax = (price + shipping) * 0.10;
    const grandTotal = (price + tax + shipping)

    return (
        <div className="productSummary">
            <h2>Total Products: {props.cart.length}</h2>
            <p>Price: {price.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h4>GrandTotal: {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default ProductSummary;