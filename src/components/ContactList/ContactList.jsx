import { useSelector } from 'react-redux';
import { selectAllContacts } from '../../redux/contacts/selectors';
import { selectNameFilter } from '../../redux/filters/filtersSlice';
import Contact from '../Contact/Contact';
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
          {filteredContacts.map(({ id, name, number }) => (
              <li key={id} className={css.item}>
                  <Contact id={id} name={name} number={number} />
              </li>
          ))}
      </ul>
  );
}
