import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className="container p-md-5" style={{textAlign: 'center'}}>
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className="mb-2" />
                <h1 className="mt-5">Invest in everything</h1>
                <p> Online platform to invest in stocks, derivatives, mutual funds, and more</p> 
            </div>
            <Link to='/signup'><button type='button' className="btn btn-primary fs-5 mb-2">Signup Now</button></Link>
        </div>
    );
}

export default Hero;