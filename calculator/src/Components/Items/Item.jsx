import styles from './Item.module.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { totalContext } from '../../Contexts/totalContext';
import { ExtraContext } from '../../Contexts/ExtraContext';

const Item = ({ name = '項目', price }) => {
  const [itemAmount, setItemAmount] = useState(0);
  const { subTotal, setSubTotal } = useContext(totalContext);
  const { allExtraItems } = useContext(ExtraContext);
  const itemDom = useRef(null);

  useEffect(() => {
    if (name === '項目') {
      allExtraItems.current[price] = itemDom.current;
    }
  }, []);

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
    <div className={styles.Item} ref={itemDom}>
      {`${name} $${price}`}
      <div className={styles.ItemAmount}>{itemAmount}</div>
      <div className={styles.ItemControl}>
        <button onClick={onMinusOne}>−</button>
        <button onClick={onAddOne}>+</button>
      </div>
    </div>
  );
};

export default Item;
