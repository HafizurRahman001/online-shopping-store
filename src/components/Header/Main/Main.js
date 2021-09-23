import React, { useEffect, useState } from 'react';
import CategoryLists from '../../CategoryLists/CategoryLists';
import Footer from '../../Footer/Footer';
import Products from '../../Products/Products';
import ProductSummary from '../../ProductSummary/ProductSummary';
import './Main.css';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const purchaseProduct = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div style={{ margin: '12px 0px', border: '1px solid lightgray' }}>
            <div className="main-section">
                <div className="left-section">
                    <h3>Full Category lists</h3>
                    <CategoryLists />
                    <br></br>
                    <h3>Product summary</h3>
                    <ProductSummary cart={cart} />

                </div>
                <div className="right-section">
                    {
                        products.map(product => <Products product={product} purchaseProduct={purchaseProduct} />)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;