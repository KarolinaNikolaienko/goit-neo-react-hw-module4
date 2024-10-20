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
    // <div className={css.searchBar}>
    //   <div className={css.inputWrapper}>
    //     <input className={css.searchInput} type="text" />
    //     <button className={css.searchBtn} onClick={search}>
    //       <FaMagnifyingGlass className={css.searchImage} size={12} />
    //     </button>
    <header>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <form className={css.searchBar} onSubmit={handleSearch}>
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
    </header>
  );
};

export default SearchBar;
