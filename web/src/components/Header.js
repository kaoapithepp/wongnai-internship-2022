import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <Link to="/" style={{"textDecoration" : "inherit", "cursor" : "pointer"}}>
                <h1 className="header">
                    เที่ยวไหนดี
                </h1>
            </Link>
        </div>
    );
}

export default Header;