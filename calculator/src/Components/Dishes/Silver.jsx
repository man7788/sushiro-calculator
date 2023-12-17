import styles from './Silver.module.css';
import { useContext, useState } from 'react';
import { totalContext } from '../../Contexts/totalContext';

const Silver = () => {
  const [silverAmount, setSilverAmount] = useState(0);
  const { total, setTotal } = useContext(totalContext);

  const onAddOne = () => {
    setTotal(total + 17);
    setSilverAmount(silverAmount + 1);
  };

  const onMinusOne = () => {
    if (total !== 0 && silverAmount !== 0) {
      setTotal(total - 17);
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
