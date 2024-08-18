import { IoPerson } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Contact.module.css';

export default function Contact({ id, name, number }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
    };

    return (
        <div className={css.container}>
            <div className={css.wrap}>
                <p className={css.name}>
                    <IoPerson className={css.icon} />
                    {name}
                </p>
                <p className={css.name}>
                    <FaPhone className={css.icon} />
                    {number}
                </p>
            </div>
            <button onClick={handleDelete} className={css.btn}>
                Delete
            </button>
        </div>
    );
}
