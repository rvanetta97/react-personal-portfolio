import React from 'react';
import Header from './components/Header.jsx';
import ContactForm from './components/contactForm.jsx';
import Portfolio from './components/portfolio.jsx';
import AboutMe from './components/aboutMe.jsx';

function App() {
    return (
      <div>
        <Header />
        <AboutMe /> {/* Inserting the AboutMe component */}
        <Portfolio /> {/* Corrected the comment to match the component name */}
        <ContactForm /> {/* Inserting the ContactForm component */}
      </div>
    );
  }
  
export default App;
