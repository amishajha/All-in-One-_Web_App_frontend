import React  from 'react';
import './App.css';
function Footer() {
    return (

        <div className="footer">

            <p>&copy; All Rights Reserved</p>
            <p><span>All In One</span> Copyright { new Date().getFullYear() }</p>
        </div>
    );
}
export default Footer;