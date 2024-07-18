import React from 'react';
import Card from 'react-bootstrap/Card';
import nutriFitImg from '../../assets/NutriFit.png';
import timeCapsuleImg from '../../assets/TimeCapsule image.png';
import './portfolio.css';

function Portfolio() {
  const cardData = [
    {
      title: 'TimeCapsule',
      image: timeCapsuleImg,
      text: 'The site is built to display facts about the birthday of the user, including the top headline of the day, book of the year, and/or movie of the year.',
      links: ['https://github.com/BeeCeeTee/TimeCapsule', 'https://beeceetee.github.io/TimeCapsule/']
    },
    {
      title: 'NutriFit',
      image: nutriFitImg, 
      text: 'Elevate your wellness journey with Nutrifit, the all-in-one site designed to help you achieve your health and fitness goals. Nutrifit makes it easy to log your meals, track your workouts, and monitor your progress—all in one place!',
      links: ['https://github.com/rvanetta97/NutriFit', 'https://nutrifit-47ii.onrender.com']
    }
  ];
  const getLinkName = (link) => {
    if (link.includes('github.com')) {
      return 'GitHub Project';
    } else {
      return 'Live Site';
    }
  };
  return (
    <>
      {cardData.map((card, index) => (
      <Card key={index} className='projectCard'>
        <Card.Body className='project-card-body'>
          <Card.Title className='project-card-title'>{card.title}</Card.Title>
          {card.image && <Card.Img src={card.image} alt={card.title} className="projectPic" />}
          <Card.Text>
            {card.text}
          </Card.Text>
          {card.links.map((link, linkIndex) => (
            <Card.Link key={linkIndex} href={link} target="_blank" rel="noopener noreferrer" className = 'links'>
              {getLinkName(link)} {/* Use the function to set the link name */}
            </Card.Link>
          ))}
        </Card.Body>
      </Card>
      ))}
    </>
  );
}

export default Portfolio;

