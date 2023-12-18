import styles from './Dishes.module.css';
import { useContext, useState } from 'react';
import { totalContext } from '../../Contexts/totalContext';

const Gold = () => {
  const [goldAmount, setGoldAmount] = useState(0);
  const { subTotal, setSubTotal } = useContext(totalContext);

  const onAddOne = () => {
    setSubTotal(subTotal + 22);
    setGoldAmount(goldAmount + 1);
  };

  const onMinusOne = () => {
    if (subTotal !== 0 && goldAmount !== 0) {
      setSubTotal(subTotal - 22);
      setGoldAmount(goldAmount - 1);
    }
  };

  return (
    <div className={styles.Gold}>
      Gold
      <button onClick={onMinusOne}>-</button>
      {goldAmount}
      <button onClick={onAddOne}>+</button>
    </div>
  );
};

export default Gold;
