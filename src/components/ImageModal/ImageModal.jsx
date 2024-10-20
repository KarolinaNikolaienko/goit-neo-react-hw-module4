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
          <img src="" alt={image} className={css.modalImage} />
          <div className={css.imageInfo}>
            <p>dfghjkljh</p>
            <p>dfghjkljh</p>
            <p>dfghjkljh</p>
            <p>dfghjkljh</p>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default ImageModal;
