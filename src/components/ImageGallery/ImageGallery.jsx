import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <div className={css.imagesWrapper}>
      <ul className={css.imagesList}>
        {images.map(image => (
          <>
            <li key={image}>
              <ImageCard image={image} />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
