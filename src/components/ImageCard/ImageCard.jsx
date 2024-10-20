import css from './ImageCard.module.css';

const ImageCard = image => {
  return (
    <div className={css.imageCard}>
      <img src="" alt={image} className={css.image} />
    </div>
  );
};

export default ImageCard;
