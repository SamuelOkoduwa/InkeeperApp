
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

const MeetTeam = () => {
  return (
 <>
 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '35vh' }}>
 <h2 style={{ textAlign: 'center' }}>Meet our Team</h2>
   <h3 style={{ textAlign: 'center'}}>We are passionate about impacting lives</h3>
   </div>

   
   <Container style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }} className="my-3">
      <Card style={{ textAlign: 'center', width: '18rem', margin: '10px' }}>
       
        <Card.Body>
        <Card.Img variant="top" src={image1}/>
          <Card.Text>
          
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ textAlign: 'center', width: '18rem', margin: '10px' }}>
        
        <Card.Body>
        <Card.Img variant="top" src={image2}/>
          <Card.Text>
          
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ textAlign: 'center', width: '18rem', margin: '10px' }}>
       
        <Card.Body>
        <Card.Img variant="top" src={image3}/>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
};

export default MeetTeam;
