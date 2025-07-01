import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        <div className="container p-md-5" style={{textAlign: 'center'}}>
            <div className="row text-center">
                <h1 className="mt-5">Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            </div>
            <Link to='/signup'><button type='button' className="btn btn-primary fs-5 mb-2">Signup Now</button></Link>
        </div>
    );
}

export default OpenAccount;