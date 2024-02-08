import styles from './Button.module.css';

const Button = ({ price, onHandleClick, clicked }) => {
  return (
    <button
      className={clicked ? styles.activeButton : styles.defaultButton}
      onClick={clicked ? null : onHandleClick}>
      {`$${price}`}
    </button>
  );
};

export default Button;
