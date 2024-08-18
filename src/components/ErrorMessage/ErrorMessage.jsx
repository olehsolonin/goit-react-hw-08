import css from './Error.module.css';

export default function ErrorMessage() {
    return <p className={css.error}>Ooops, some error, refresh the page...</p>;
}
