const Button = ({ price, onHandleClick, clicked }) => {
  return (
    <button style={clicked} onClick={clicked ? null : onHandleClick}>
      {`$${price}`}
    </button>
  );
};

export default Button;
