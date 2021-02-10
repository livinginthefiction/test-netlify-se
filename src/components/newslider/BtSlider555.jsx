import React from 'react'

function BtSlider() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://admin.siowebcraft.com/backend/assets/uploads/Pound1.jpg" alt="First slide"/>
                        <div className="carousel-caption">
                            <h5 className="text-dark">Lowest Energy Prices</h5>
                            <p className="text-dark">Guaranteed on all Comparison Sites and the Big 6</p>
                            <center><button className="glow">Get Quote</button></center>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://admin.siowebcraft.com/backend/assets/uploads/Pound2.jpg" alt="Second slide"/>
                        <div className="carousel-caption">
                            <h5 className="text-dark">Low Fair & Green Energy</h5>
                            <p className="text-dark">At no extra cost</p>
                            <center><button className="glow">Get Quote</button></center>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://admin.siowebcraft.com/backend/assets/uploads/Pound3.jpg" alt="Second slide"/>
                        <div className="carousel-caption">
                            <h5 className="text-dark">RIP OFF ALERT!</h5>
                            <p className="text-dark">Is your Electricity Company RIPPING YOU OFF?</p>
                            <center><button className="glow">Get Quote</button></center>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://admin.siowebcraft.com/backend/assets/uploads/Pound4.jpg" alt="Second slide"/>
                        <div className="carousel-caption">
                            <h5 className="text-dark">Save Millions with Symbio Energy.</h5>
                            <p className="text-dark">Join the Revolution & Stop Overpaying for Electricity</p>
                            <center><button className="glow">Get Quote</button></center>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>  
        </>
    )
}

export default BtSlider
