import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../../images/banner1.png"
import banner2 from '../../../../images/banner2.jpg'
import banner3 from '../../../../images/banner3.jpg'

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img height={'500px'} width='300px' className="d-block w-100" src={banner1} alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Visiting Doctor</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height={'600px'} width='300px'
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Geriatric medicine Doctor</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height={'600px'} width='300px'
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>primary care </h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;