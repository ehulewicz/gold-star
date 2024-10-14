import React from 'react';
import { Link } from 'react-router-dom';

import './Components.css';

function Footer () {
    return (
        <footer className='footer'>
            <p>&copy; 2024 Gold Star Home Improvement. All rights reserved.</p>
            <nav>
                <Link to='/contact'>Contact</Link>
            </nav>
        </footer>
    );
}

export default Footer;