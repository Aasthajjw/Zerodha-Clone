import React from 'react';

function LeftSection({imageURL,productName,productDesription,tryDemo,learnMore,googlePlay,appStore}){
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={imageURL} style={{ width: "80%" }}/>
                </div>
                <div className="col-md-6 p-md-5">
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div className='row'>
                        <a href={tryDemo} className='col-6'>Try Demo</a>
                        <a href={learnMore} className='col-6'>Learn More</a>
                    </div>
                    <div className="row mt-3">
                        <a href={googlePlay} className='col-6'><img src="media/images/googlePlayBadge.svg" /></a>
                        <a href={appStore} className='col-6'><img src="media/images/appstoreBadge.svg"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;