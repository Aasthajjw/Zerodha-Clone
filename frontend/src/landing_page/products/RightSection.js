import React from 'react';

function RightSection({ imageURL, productName, productDesription, learnMore }) {
    return ( 
        <div className="container">
        <div className="row">
            <div className="col-md-6 p-md-5 mt-2">
                <h1>{productName}</h1>
                <p>{productDesription}</p>
                <div>
                    <a href={learnMore}>Learn More</a>
                </div>
            </div>
            <div className="col-md-6 p-md-5 mt-2">
                <img src={imageURL} style={{ width: "80%" }}/>
            </div>
        </div>
        </div>
     );
}

export default RightSection;