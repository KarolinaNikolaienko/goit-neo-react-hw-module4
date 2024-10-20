import './App.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <SearchBar />
      <Loader loading={false} />
      <ImageGallery images={images} />
      <LoadMoreBtn />
    </>
  );
}

export default App;
