import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import "../../styles/news.css"
import carouselIMG1 from '../../assets/new1.png';
import carouselIMG2 from '../../assets/new2.png';
import carouselIMG3 from '../../assets/new3.png';

const carouselImages = [carouselIMG1, carouselIMG2, carouselIMG3];

export default function News() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='carousel'>
            {carouselImages.map((img, idx) => (
                <Carousel.Item key={idx} interval={1500}>
                    <img src={img} alt={`Carrusel ${idx + 1}`} className="carouselNewIMG"/>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
