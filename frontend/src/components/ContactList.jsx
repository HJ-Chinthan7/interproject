import React, { useState, useEffect } from 'react';
import ContactCard from './ContactCard';
import  contactService  from '../services/contactService';
import '../styles/ContactList.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const data = await contactService.getAllContacts();
      setContacts(data.data);
    } catch (err) {
      setError('Failed to load contacts');
      console.error('Error loading contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading contacts...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (contacts.length === 0) {
    return <div className="no-contacts">No contacts found.</div>;
  }

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactCard key={contact._id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
