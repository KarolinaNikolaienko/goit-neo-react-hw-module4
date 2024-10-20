import css from './ImageCard.module.css';

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={css.imageCard} onClick={() => onImageClick(image)}>
      <img src="" alt={image} className={css.image} />
    </div>
  );
};

export default ImageCard;
