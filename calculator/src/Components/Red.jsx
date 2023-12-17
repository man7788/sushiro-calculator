import styles from './Red.module.css';
import { useContext } from 'react';
import { totalContext } from '../Contexts/totalContext';

function Red() {
  const { total, setTotal } = useContext(totalContext);

  const onAddOne = () => {
    setTotal(total + 12);
  };

  const onMinusOne = () => {
    total !== 0 && setTotal(total - 12);
  };

  return (
    <div className={styles.Red}>
      Red
      <button onClick={onMinusOne}>-</button>
      <button onClick={onAddOne}>+</button>
    </div>
  );
}

export default Red;
