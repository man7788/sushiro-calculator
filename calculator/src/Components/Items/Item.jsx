import styles from './Item.module.css';
import { useContext, useState } from 'react';
import { totalContext } from '../../Contexts/totalContext';

const Item = ({ name = '項目', price }) => {
  const [itemAmount, setItemAmount] = useState(0);
  const { subTotal, setSubTotal } = useContext(totalContext);

  const onAddOne = () => {
    setSubTotal(subTotal + price);
    setItemAmount(itemAmount + 1);
  };

  const onMinusOne = () => {
    if (subTotal !== 0 && itemAmount !== 0) {
      setSubTotal(subTotal - price);
      setItemAmount(itemAmount - 1);
    }
  };

  return (
    <div className={styles.Item}>
      {`${name} $${price}`}
      <div>{itemAmount}</div>
      <div className={styles.ItemControl}>
        <button onClick={onMinusOne}>−</button>
        <button onClick={onAddOne}>+</button>
      </div>
    </div>
  );
};

export default Item;
