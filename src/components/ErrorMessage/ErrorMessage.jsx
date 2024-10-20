import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={css.errorMsgWrapper}>
      <p className={css.errorMsg}>
        Whoops, something went wrong! Please try reloading this page!
      </p>
    </div>
  );
};

export default ErrorMessage;
