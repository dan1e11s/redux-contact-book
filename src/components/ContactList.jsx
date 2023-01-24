import React from 'react';
import ContactCard from './ContactCard';
import { useSelector } from 'react-redux';
import { selectContacts } from '../store/contacts/contact-selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  return (
    <div
      style={{
        margin: '100px 150px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {contacts?.map((item) => (
        <ContactCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
