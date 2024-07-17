import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function ContactForm() {
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: ''
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData(prevState => ({
            ...prevState,
            [name]: value
          }));
        };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Please enter your name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupMessage">
        <Form.Label>Add a message:</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter message"
        />
      </Form.Group>
    </Form>
  );
}

export default ContactForm;
