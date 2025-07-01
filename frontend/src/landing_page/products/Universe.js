import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return ( 
         <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                <div className="col-sm-4 p-3 mt-2">
                    <img src="/Media/images/zerodhaFundhouse.png" style={{ width: "50%" }}/>
                    <p className="text-small text-muted mt-2">Our asset management venture that is creating simple and transparent index funds to help you save for your goals. </p>
                </div>
                <div className="col-sm-4 p-3 mt-2">
                    <img src="/Media/images/sensibullLogo.svg" style={{ width: "60%" }}/>
                    <p className="text-small text-muted mt-2">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-sm-4 p-3 mt-2">
                    <img src="/Media/images/tijori.svg" style={{ width: "40%" }}/>
                    <p className="text-small text-muted mt-2">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more. </p>
                </div>
                <div className="col-sm-4 p-3 mt-2">
                    <img src="/Media/images/streakLogo.png" style={{ width: "50%" }}/>
                    <p className="text-small text-muted mt-2">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className="col-sm-4 p-3 mt-2">
                    <img src="/Media/images/smallcaseLogo.png" style={{ width: "60%" }}/>
                    <p className="text-small text-muted mt-2">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs. </p>
                </div>
                <div className="col-sm-4 p-3 mt-2">
                    <img src="/Media/images/dittoLogo.png" style={{ width: "40%" }}/>
                    <p className="text-small text-muted mt-2">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
                <Link to='/signup' className='mb-3'><button type='button' className="btn btn-primary fs-5 mb-2">Signup Now</button></Link>
            </div>
        </div>
    );
}

export default Universe;
