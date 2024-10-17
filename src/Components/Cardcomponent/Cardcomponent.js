import Card from 'react-bootstrap/Card';
import './Cardcomponent.css'
import cardcompbg from '../../assets/images/serbg2.jpg'
function Cardcomponent() {
  return (
  
    
    <Card style={{ width: '18rem' }} className='card_body' >
      <Card.Body>
        <Card.Title className='card_title' >01</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">october 05,2024</Card.Subtitle>
        <Card.Text className='textyy'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi suscipit quibusdam, voluptate magni corporis modi quis quia aliquid ad, asperiores itaque facere doloremque possimus vero.
        </Card.Text>
        <Card.Link className='Cardlink' href="#">Click</Card.Link>
        
      </Card.Body>
    </Card>
    
  );
}

export default Cardcomponent;