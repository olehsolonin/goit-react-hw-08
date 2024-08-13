import css from './Contact.module.css';
import { IoPerson } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';

export default function Contact({ data, onDelete }) {
  //   console.log(data.id);

  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <p className={css.name}>
          <IoPerson className={css.icon} />
          {data.name}
        </p>
        <p className={css.name}>
          <FaPhone className={css.icon} />
          {data.number}
        </p>
      </div>
      <button onClick={() => onDelete(data.id)} className={css.btn}>
        Delete
      </button>
    </div>
  );
}
