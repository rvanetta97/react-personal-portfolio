import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS is imported

function aboutMe() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src="../assets/enchanted-forest-1191723.jpg" />
        <Card.Title>aboutMe</Card.Title>
        <Card.Body>
          <Card.Text>
                    Solutions Manager with 1+ years of experience creating and implementing operational processes.
                    Currently employed at Zivian Health Inc.
                    Pursuing an education in coding at Case Western Reserve. Seeking a position within the software
                    engineering space to utilize my knowledge
                    and passion for operational and product excellence.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default aboutMe();