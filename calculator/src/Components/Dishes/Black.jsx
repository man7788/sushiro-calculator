import styles from './Black.module.css';
import { useContext, useState } from 'react';
import { totalContext } from '../../Contexts/totalContext';

const Black = () => {
  const [blackAmount, setBlackAmount] = useState(0);
  const { total, setTotal } = useContext(totalContext);

  const onAddOne = () => {
    setTotal(total + 27);
    setBlackAmount(blackAmount + 1);
  };

  const onMinusOne = () => {
    if (total !== 0 && blackAmount !== 0) {
      setTotal(total - 27);
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
