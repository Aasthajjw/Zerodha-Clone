import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <nav className="navbar navbar-expand-lg border-bottom sticky-top" style={{ backgroundColor: "#FFF" }}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="media/images/logo.svg" style={{ width: "10rem" }} alt="Logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{flexGrow: '0'}}>
                    <form className="d-flex" role="search">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link class="nav-link active" aria-current="page" to="/signup">Signup</Link></li>
                        <li className="nav-item"><Link class="nav-link active" to="/about">About</Link></li>
                        <li className="nav-item"><Link class="nav-link active" to="/product">Product</Link></li>
                        <li className="nav-item"><Link class="nav-link active" to="/pricing">Pricing</Link></li>
                        <li className="nav-item"><Link class="nav-link active" to="/support">Support</Link></li>
                    </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;