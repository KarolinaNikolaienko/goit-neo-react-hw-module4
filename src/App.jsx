import { useEffect, useState } from 'react';
import './App.css';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageModal from './components/ImageModal/ImageModal';
import axios from 'axios';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(false);

        const config = new URLSearchParams({
          client_id: 'pohLQFAdzVWZxRkFEKDtDrKLgnGX_DFXlyLIqCPIWCY',
          query: searchQuery,
          per_page: 30,
          page: page,
        });
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?${config}`
        );
        setImages(prevImages => {
          return [...prevImages, ...response.data.results];
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery, page]);

  const handleSearch = query => {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  function openModal(newCurrentImage) {
    setCurrentImage(newCurrentImage);
    setIsOpen(true);
  }

  function afterOpenModal() {
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.body.style.overflow = 'scroll';
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar search={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} onImageClick={openModal} />
          {!loading && <LoadMoreBtn loadMore={handleLoadMore} />}
        </>
      )}
      <Loader loading={loading} />
      {Object.keys(currentImage).length !== 0 && (
        <ImageModal
          image={currentImage}
          modalIsOpen={modalIsOpen}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default App;
