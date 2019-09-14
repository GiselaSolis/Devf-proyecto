import React, { Component } from 'react';
import Im1 from '../Images/1.jpeg';
import Im2 from '../Images/2.jpeg';
import Im3 from '../Images/3.jpeg';

export class Carousel extends Component {
    render() {
        return (
            <React.Fragment>
               <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src={Im1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item active">
                            <img src={Im2} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={Im3} className="d-block w-100" alt="..."/>
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
            </React.Fragment>
        );
    }
}

export default Carousel;
