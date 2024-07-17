import React from 'react';
import Card from 'react-bootstrap/Card';

function Portfolio() {
  const cardData = [
    {
      title: 'TimeCapsule',
      image: './assets/images/timecapsule.png',
      text: 'The site is built to display facts about the birthday of the user, including the top headline of the day, book of the year, and/or movie of the year.',
      links: ['https://github.com/BeeCeeTee/TimeCapsule', 'https://beeceetee.github.io/TimeCapsule/']
    },
    {
      title: 'Card Title 2',
      image: '', // Add image path here if available
      text: 'Another quick example text to build on the card title and make up the bulk of the card\'s content.',
      links: ['#', '#']
    }
    // Add more card objects as needed
  ];

  return (
    <>
      {cardData.map((card, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            {card.image && <Card.Img src={card.image} alt={card.title} className="mb-2 text-muted" />}
            <Card.Text>
              {card.text}
            </Card.Text>
            {card.links.map((link, linkIndex) => (
              <Card.Link key={linkIndex} href={link} target="_blank" rel="noopener noreferrer">
                Link {linkIndex + 1}
              </Card.Link>
            ))}
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Portfolio;
