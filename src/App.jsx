import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Header';
import ContactForm from './components./ContactForm'; 
import Footer from './components/Footer'; 
import Portfolio from './components/portfolio';

function App() {
    return (
      <div>
        <MyNavbar />
        <Portfolio /> {/* Inserting the Project component */}
        <ContactForm /> {/* Inserting the ContactForm component */}
        <Footer /> {/* Inserting the Footer component */}
      </div>
    );
  }
  
  export default App;
