import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header-container">
                <h1>Online Product Store</h1>
            </div>
            <div className="navbar">
                <a href="/home">Home</a><a href="/product">Product</a><a href="/category">Category</a><a href="/rating">Rating</a><a href="/others">Others</a>
            </div>
        </div>
    );
};

export default Header;