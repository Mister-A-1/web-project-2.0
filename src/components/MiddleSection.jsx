import React, { useEffect } from 'react';
import '../styles/MiddleSection.css';
import { setupSlider } from '../components/slider.jsx'; 
import '../styles/MiddleSection.css';
import imag0 from '../assets/imag2.png';
import imag1 from '../assets/img3.JPG';
import imag2 from '../assets/img4.JPG';
import imag3 from '../assets/img5.JPG';
import imag4 from '../assets/img6.JPG';
import imag5 from '../assets/img7.JPG';
import imag6 from '../assets/img8.JPG';
import imag7 from '../assets/img9.JPG';
import imag8 from '../assets/img10.JPG';
import imag9 from '../assets/img11.JPG';
import imag10 from '../assets/img12.JPG';
import imag11 from '../assets/img13.JPG';
import imag12 from '../assets/img14.JPG';
import imag13 from '../assets/img15.JPG';

function MiddleSection() {
  useEffect(() => {
    // Initialize the slider for the first sliding div
    setupSlider('.image-slider', '#nextButton');
  }, []);
  return (
    <div className="middle-sec">
      <img src={imag0}className="img-responsive" alt="Main Image" /> 
      <div className="ps5-container">
        <div className="Playstation 5">
          <h1>Playstation 5 Games</h1>

          <div className="image-slider-container">
          <div className="slider-container">
            <div className="image-slider">
              <div className="image-item">
                <img src={imag1} alt="Image 1" />
                <p>Sonic X Shadow Generations PS5</p>
              </div>
              {/* Add more images as per your needs */}
              <div className="image-item">
                <img src={imag2} alt="Image 1" />
                <p>Sonic X Shadow Generations PS5</p>
              </div>
              {/* Add more images as per your needs */}
              <div className="image-item">
                <img src={imag3} alt="Image 1" />
                <p>Sonic X Shadow Generations PS5</p>
              </div>
              {/* Add more images as per your needs */}
              <div className="image-item">
                <img src={imag4} alt="Image 1" />
                <p>Sonic X Shadow Generations PS5</p>
              </div>
              {/* Add more images as per your needs */}
              <div className="image-item">
                <img src={imag5} alt="Image 1" />
                <p>Sonic X Shadow Generations PS5</p>
              </div>
              {/* Add more images as per your needs */}
              <div className="image-item">
                <img src={imag6} alt="Image 1" />
                <p>Sonic X Shadow Generations PS5</p>
              </div>
              {/* Add more images as per your needs */}
              <div className="image-item">
                <img src={imag7} alt="Image 1" />
                <p>Sonic X Shadow Generations PS5</p>
              </div>
              {/* Add more images as per your needs */}
              <div className="image-item">
                <img src={imag8} alt="Image 1" />
                <p>Sonic X Shadow Generations PS5</p>
              </div>
              {/* Add more images as per your needs */}
              <div className="image-item">
                <img src={imag9} alt="Image 1" />
                <p>Sonic X Shadow Generations PS5</p>
              </div>
              {/* Add more images as per your needs */}
              <div className="image-item">
                <img src={imag10} alt="Image 1" />
                <p>Sonic X Shadow Generations PS5</p>
              </div>
              {/* Add more images as per your needs */}
              <div className="image-item">
                <img src={imag11} alt="Image 1" />
                <p>Sonic X Shadow Generations PS5</p>
              </div>
              {/* Add more images as per your needs */}
              <div className="image-item">
                <img src={imag12} alt="Image 1" />
                <p>Sonic X Shadow Generations PS5</p>
              </div>
              {/* Add more images as per your needs */}
              <div className="image-item">
                <img src={imag13} alt="Image 1" />
                <p>Sonic X Shadow Generations PS5</p>
              </div>
              {/* Add more images as per your needs */}

            </div>
            <button id="nextButton">Next</button>
          </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default MiddleSection;
