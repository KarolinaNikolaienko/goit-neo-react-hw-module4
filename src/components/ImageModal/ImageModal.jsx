import css from './ImageModal.module.css';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#111111',
    border: 'none',
    color: 'white',
    padding: '0',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
};

const ImageModal = ({ image, modalIsOpen, afterOpenModal, closeModal }) => {
  return (
    <>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div className={css.modalWrapper}>
          <img
            className={css.modalImage}
            src={image.urls.full}
            alt={image.description}
            width={image.width}
            height={image.height}
          />
          <div className={css.imageInfo}>
            <p>
              Uploaded by{' '}
              <a href={image.user.links.html} target="_blank">
                {image.user.name}
              </a>
            </p>
            <p>Likes {image.likes}</p>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default ImageModal;
