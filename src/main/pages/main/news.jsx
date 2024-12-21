import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import "../../styles/news.css"
import carouselIMG1 from '../../assets/new1.png';
import carouselIMG2 from '../../assets/new2.png';
import carouselIMG3 from '../../assets/new3.png';

const carouselElements = [
    {
        id: '1',
        img: carouselIMG1,
        text: "Lorem, ipsum dolor sit amet consectetur",
    },
    {
        id: '2',
        img: carouselIMG2,
        text: "Lorem, ipsum dolor sit amet consectetur",
    },
    {
        id: '3',
        img: carouselIMG3,
        text: "Lorem, ipsum dolor sit amet consectetur",
    },

    
]

export default function News() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <section>
            <Carousel activeIndex={index} onSelect={handleSelect} className='carousel'>
                {carouselElements.map((element) => (
                    <Carousel.Item key={element.id} interval={1500}>
                        <img src={element.img} alt={`Carrusel ${element.id + 1}`} className="carouselNewIMG"/>
                        <div >
                            <Carousel.Caption className='captions'>
                                <p>{element.text}</p>
                            </Carousel.Caption>
                        </div>
                        
                    </Carousel.Item>

                ))}
            </Carousel>
            
        </section>
        
    );
}
