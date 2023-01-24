export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';

export const addContact = (name, phoneNumber, imageUrl) => ({
  type: ADD_CONTACT,
  name,
  phoneNumber,
  imageUrl,
});

export const removeContact = (id) => ({
  type: REMOVE_CONTACT,
  id,
});
