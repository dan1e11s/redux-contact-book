import { ADD_CONTACT, REMOVE_CONTACT } from './contact-actions';

export const contactReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT: {
      return [
        ...state,
        {
          id: Date.now(),
          name: action.name,
          phoneNumber: action.phoneNumber,
          imageUrl: action.imageUrl,
        },
      ];
    }
    case REMOVE_CONTACT:
      return state.filter((contact) => contact.id !== action.id);
    default:
      return state;
  }
};
