import styles from './Gold.module.css';
import { useContext, useState } from 'react';
import { totalContext } from '../../Contexts/totalContext';

const Gold = () => {
  const [goldAmount, setGoldAmount] = useState(0);
  const { total, setTotal } = useContext(totalContext);

  const onAddOne = () => {
    setTotal(total + 22);
    setGoldAmount(goldAmount + 1);
  };

  const onMinusOne = () => {
    if (total !== 0 && goldAmount !== 0) {
      setTotal(total - 22);
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
