import styles from './Dishes.module.css';
import { useContext, useState } from 'react';
import { totalContext } from '../../Contexts/totalContext';

const Silver = () => {
  const [silverAmount, setSilverAmount] = useState(0);
  const { subTotal, setSubTotal } = useContext(totalContext);

  const onAddOne = () => {
    setSubTotal(subTotal + 17);
    setSilverAmount(silverAmount + 1);
  };

  const onMinusOne = () => {
    if (subTotal !== 0 && silverAmount !== 0) {
      setSubTotal(subTotal - 17);
      setSilverAmount(silverAmount - 1);
    }
  };

  return (
    <div className={styles.Silver}>
      Silver
      <button onClick={onMinusOne}>-</button>
      {silverAmount}
      <button onClick={onAddOne}>+</button>
    </div>
  );
};

export default Silver;
