import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const filtersState = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleFilter = value => {
    dispatch(setFilter(value));
  };

  return (
    <div className={css.filter}>
      <input
        type="text"
        value={filtersState}
        onChange={e => handleFilter(e.target.value)}
        className={css.filterInput}
        placeholder="Search user"
      />
    </div>
  );
}
