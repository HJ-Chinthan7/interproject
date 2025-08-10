import React from 'react';
import ContactList from '../components/ContactList';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Messages</h1>
      <ContactList />
    </div>
  );
};

export default Contact;
