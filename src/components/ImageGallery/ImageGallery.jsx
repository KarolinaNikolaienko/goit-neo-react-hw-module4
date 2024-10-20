import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={css.imagesWrapper}>
      <ul className={css.imagesList}>
        {images.map(image => (
          <>
            <li key={image}>
              <ImageCard image={image} onImageClick={onImageClick} />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
