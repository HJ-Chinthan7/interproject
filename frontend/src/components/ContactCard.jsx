import React from 'react';
import '../styles/ContactCard.css';

const ContactCard = ({ contact }) => {
  return (
    <div className="contact-card">
      <h3 className="contact-name">{contact.name}</h3>
      <p className="contact-email">{contact.email}</p>
      <p className="contact-message">{contact.message}</p>
    </div>
  );
};

export default ContactCard;
