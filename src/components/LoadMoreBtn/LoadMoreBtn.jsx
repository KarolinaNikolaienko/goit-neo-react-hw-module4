import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ loadMore }) => {
  return (
    <div className={css.loadMoreBtnWrapper}>
      <button className={css.loadMoreBtn} onClick={loadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
