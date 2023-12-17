import styles from './Red.module.css';
import { useContext, useState } from 'react';
import { totalContext } from '../Contexts/totalContext';

function Red() {
  const [redAmount, setRedAmount] = useState(0);
  const { total, setTotal } = useContext(totalContext);

  const onAddOne = () => {
    setTotal(total + 12);
    setRedAmount(redAmount + 1);
  };

  const onMinusOne = () => {
    if (total !== 0 && redAmount !== 0) {
      setTotal(total - 12);
      setRedAmount(redAmount - 1);
    }
  };

  return (
    <div className={styles.Red}>
      Red
      <button onClick={onMinusOne}>-</button>
      {redAmount}
      <button onClick={onAddOne}>+</button>
    </div>
  );
}

export default Red;
