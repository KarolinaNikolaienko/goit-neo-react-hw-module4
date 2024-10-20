import css from './SearchBar.module.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const SearchBar = ({ search }) => {
  return (
    <div className={css.searchBar}>
      <div className={css.inputWrapper}>
        <input className={css.searchInput} type="text" />
        <button className={css.searchBtn} onClick={search}>
          <FaMagnifyingGlass className={css.searchImage} size={12} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
