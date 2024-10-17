import React from 'react'
import './Header.css'
import Carousel from 'react-bootstrap/Carousel';
import Navigation from '../Navigation/Navigation'
import image from '../../assets/images/background-1.jpg'
import slide1 from '../../assets/images/background-1.jpg'
import slide2 from '../../assets/images/slider2.jpg'
import slide3 from '../../assets/images/slider3.jpg'
import Card from 'react-bootstrap/Card';

const Header = () => {
    
   
    return (
        <div className='headerall'>
         
            <Navigation/>
            <div className='container slidermain' >
            <Carousel className='borderrr'>
      <Carousel.Item className='items' interval={1000}>
      <img src={slide1} alt="" />
      {/* <Carousel.Caption>
      <Card className='slidecard' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>
        California young menz club in the city center
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
  
      </Card.Body>
    </Card>
      </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className='items' interval={500}>
      <img src={slide2} alt="" />
      {/* <Carousel.Caption>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>
        California young menz club in the city center
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
  
      </Card.Body>
    </Card>
      </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className='items'>
        <img src={slide3} alt="" />
        {/* <Carousel.Caption>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>
        California young menz club in the city center
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
  
      </Card.Body>
    </Card>
      </Carousel.Caption> */}
      </Carousel.Item>
      
    </Carousel>
    
            </div>
        </div>
    )
}

export default Header