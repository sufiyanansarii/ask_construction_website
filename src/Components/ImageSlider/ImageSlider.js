import React, { useState } from 'react';
import { Carousel, Card, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import slide1 from '../../assets/images/background-1.jpg'
import slide2 from '../../assets/images/slider2.jpg'
import slide3 from '../../assets/images/slider3.jpg'


const ImageSliderWithCard = () => {
  const [index, setIndex] = useState(0); // State to track the active slide

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 3); // Change to next slide
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + 3) % 3); // Change to previous slide
  };

  return (
    <Row>
      <Col md={12}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide1} // Replace with your image URL
              alt="First slide"
            />
            
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide2} // Replace with your image URL
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide3} // Replace with your image URL
              alt="Third slide"
            />
            
          </Carousel.Item>
        </Carousel>

        {/* Custom Previous and Next Buttons */}
        <div className="d-flex mt-3">
          <button  onClick={handlePrev}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg><i class="bi bi-arrow-left"></i>
          </button>
          <button  onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
          </button>
        </div>
      </Col>

      {/* <div>
        <Card style={{ width: '100%', marginTop: '20px' }}>
          <Card.Body>
            <Card.Title>Information Card</Card.Title>
            <Card.Text>
              This card contains additional information related to the images in the slider. You can include details, descriptions, or any other relevant content here.
            </Card.Text>
            <Card.Link href="#">Link 1</Card.Link>
            <Card.Link href="#">Link 2</Card.Link>
          </Card.Body>
        </Card>
      </div> */}
    </Row>
  );
};

export default ImageSliderWithCard;
