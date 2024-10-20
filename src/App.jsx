import { useState } from 'react';
import './App.css';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const loading = false;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({});

  const search = query => {
    console.log(query);
  };

  function openModal(currentImage) {
    setCurrentImage(currentImage);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar search={search} />
      <ErrorMessage />
      {images.length > 0 && (
        <>
          <ImageGallery images={images} onImageClick={openModal} />
          {!loading && <LoadMoreBtn />}
        </>
      )}
      <Loader loading={loading} />
      <ImageModal
        image={currentImage}
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
      />
    </>
  );
}

export default App;
