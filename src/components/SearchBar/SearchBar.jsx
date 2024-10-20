import css from './SearchBar.module.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { toast, Toaster } from 'react-hot-toast';

const SearchBar = ({ search }) => {
  const handleSearch = e => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) {
      toast.error('Enter the search query');
      return;
    }
    search(searchValue);
  };

  return (
    <header className={css.header}>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <div className={css.searchBar}>
        <form onSubmit={handleSearch}>
          <div className={css.inputWrapper}>
            <input
              className={css.searchInput}
              type="text"
              name="search"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={css.searchBtn} type="submit">
              <FaMagnifyingGlass className={css.searchImage} size={12} />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
