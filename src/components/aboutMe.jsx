import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Resume from '../assets/Rachel Vanetta Resume 2024.pdf';
import aboutImage from '../assets/enchanted-forest-1191723.jpg';
import '.././App.css';

function aboutMe() {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }
  return (
    <>
      <Card>
        <Card.Img variant="top" src={aboutImage} alt="Enchanted Forest" className='aboutImg' />
        <Card.Title>About Me </Card.Title>
        <Card.Body>
          <Card.Text>
                    Solutions Manager with 1+ years of experience creating and implementing operational processes.
                    Currently employed at Zivian Health Inc.
                    Pursuing an education in coding at Case Western Reserve. Seeking a position within the software
                    engineering space to utilize my knowledge
                    and passion for operational and product excellence.
          </Card.Text>
              <button className="btn" onClick={downloadResume}>Donwload CV</button>
        </Card.Body>
      </Card>
    </>
  );
}

export default aboutMe;