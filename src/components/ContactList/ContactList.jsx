import { useSelector } from 'react-redux';
import { selectAllContacts } from '../../redux/contacts/selectors';
import { selectNameFilter } from '../../redux/filters/slice';import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {

	const contacts = useSelector(selectAllContacts);
   const nameFilter = useSelector(selectNameFilter);

   const filteredContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
            contact.number.includes(nameFilter)
      );
  
  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} data={contact} />
      ))}
    </ul>
  );
}
