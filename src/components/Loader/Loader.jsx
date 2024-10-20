import css from './Loader.module.css';
import DotLoader from 'react-spinners/DotLoader';

const Loader = ({ loading }) => {
  return (
    <div className={css.loaderWrapper}>
      <DotLoader className={css.loader} loading={loading} color="#2e317b" />
    </div>
  );
};

export default Loader;
