import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
// import {
//   selectContacts,
//   selectLoading,
//   selectError,
// } from '../../redux/contactsSlice';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.appContainer}>
      <h1 className={css.mainTitle}>Phonebook</h1>
      {loading && <Loader />}
      {error && <ErrorMessage />}

      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
