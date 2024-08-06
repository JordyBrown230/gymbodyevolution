import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carrousel.css'; 
interface ImageCarouselProps {
    images: string[];
}

const Carrousel: React.FC<ImageCarouselProps> = ({ images }) => {
    return (
        <div className="carousel-container"> {/* Contenedor del carousel */}
            <Carousel useKeyboardArrows={true} showThumbs={images.length <= 3 ? true : false}>
                {images.map((URL, index) => (
                    <div className="slide" key={index}>
                        <img
                            alt={`sample_file_${index}`}
                            src={URL}
                            style={{
                                borderRadius: '15px',
                                width: '100%',
                                height: 'auto',
                                maxHeight: '900px',
                                objectFit: 'inherit',
                            }}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Carrousel;
