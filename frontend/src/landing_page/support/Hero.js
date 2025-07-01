import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero" style={{backgroundColor: 'rgb(96, 78, 234)', color: 'white'}}>
            <div className="row m-3" style={{display: 'flex', alignItems: 'center'}}>
                <div className="col-md-6 p-sm-5">
                    <h4 className='mb-5'>Support Portal</h4>
                    <h4>Search for an answer or browse help topics to create a ticket</h4><br />
                    <input placeholder="Eg. how do I activate F&O, why is my order getting rejected..." style={{width: '90%', padding: '1vw'}}/><br /> <br />
                    <a href="" style={{color: 'white', marginRight: '2vw', fontSize: '20px'}}><u>Track account opening</u></a>
                    <a href="" style={{color: 'white', marginRight: '2vw', fontSize: '20px'}}><u>Track segment activation</u></a><br/>
                    <a href="" style={{color: 'white', marginRight: '2vw', fontSize: '20px'}}><u>Intraday margins</u></a>
                    <a href="" style={{color: 'white', marginRight: '2vw', fontSize: '20px'}}><u>Kite user manual</u></a>
                </div>
                <div className="col-md-6 p-sm-5">
                    <a href="" style={{color: 'white', fontSize: '20px'}} ><u>Track Tickets</u></a>
                    <h4 className='mt-5'>Featured</h4>
                    <ol>
                        <li><a href="" style={{color: 'white', marginRight: '2vw', fontSize: '20px'}}>Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="" style={{color: 'white', marginRight: '2vw', fontSize: '20px'}}>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;