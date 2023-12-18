import styles from './Red.module.css';
import { useContext, useState } from 'react';
import { totalContext } from '../../Contexts/totalContext';

const Red = () => {
  const [redAmount, setRedAmount] = useState(0);
  const { subTotal, setSubTotal } = useContext(totalContext);

  const onAddOne = () => {
    setSubTotal(subTotal + 50);
    setRedAmount(redAmount + 1);
  };

  const onMinusOne = () => {
    if (subTotal !== 0 && redAmount !== 0) {
      setSubTotal(subTotal - 12);
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
};

export default Red;
