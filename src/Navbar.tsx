import React from 'react';

const Navbar: React.FC = ({
    children
}) => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {children}
            </ul>
        </nav>
    );
};

export default Navbar;
