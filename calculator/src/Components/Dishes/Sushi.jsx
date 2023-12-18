import styles from './Dishes.module.css';
import { useContext, useState } from 'react';
import { totalContext } from '../../Contexts/totalContext';

const Sushi = ({ name, price }) => {
  const [amount, setAmount] = useState(0);
  const { subTotal, setSubTotal } = useContext(totalContext);

  const onAddOne = () => {
    setSubTotal(subTotal + price);
    setAmount(amount + 1);
  };

  const onMinusOne = () => {
    if (subTotal !== 0 && amount !== 0) {
      setSubTotal(subTotal - price);
      setAmount(amount - 1);
    }
  };

  return (
    <div className={styles.dishItem}>
      {`${name} $${price}`}
      <div>{amount}</div>
      <div className={styles.dishControl}>
        <button onClick={onMinusOne}>-</button>
        <button onClick={onAddOne}>+</button>
      </div>
    </div>
  );
};

export default Sushi;
