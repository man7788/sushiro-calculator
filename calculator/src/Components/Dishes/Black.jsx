import styles from './Dishes.module.css';
import { useContext, useState } from 'react';
import { totalContext } from '../../Contexts/totalContext';

const Black = () => {
  const [blackAmount, setBlackAmount] = useState(0);
  const { subTotal, setSubTotal } = useContext(totalContext);

  const onAddOne = () => {
    setSubTotal(subTotal + 27);
    setBlackAmount(blackAmount + 1);
  };

  const onMinusOne = () => {
    if (subTotal !== 0 && blackAmount !== 0) {
      setSubTotal(subTotal - 27);
      setBlackAmount(blackAmount - 1);
    }
  };

  return (
    <div className={styles.Red}>
      Black
      <button onClick={onMinusOne}>-</button>
      {blackAmount}
      <button onClick={onAddOne}>+</button>
    </div>
  );
};

export default Black;
