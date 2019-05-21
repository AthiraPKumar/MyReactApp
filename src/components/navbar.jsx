import React from 'react';

// Stateless Functional Component

const Navbar = ({totalCount}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand h1" href="www.e-shop.com">E-Shop
                <span className="badge badge-pill badge-secondary ml-3">{totalCount}</span>
            </a>
        </nav> 
      );
};


export default Navbar;