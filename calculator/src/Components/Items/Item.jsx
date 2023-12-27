import styles from './Item.module.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { totalContext } from '../../Contexts/totalContext';
import { ExtraContext } from '../../Contexts/ExtraContext';

const Item = ({ name = '', price }) => {
  const [itemAmount, setItemAmount] = useState(0);
  const { subTotal, setSubTotal } = useContext(totalContext);
  const itemDom = useRef(null);
  const [isExtraItem, setIsExtraItem] = useState(false);
  const { extraPrices, setExtraPrices, showDelete } = useContext(ExtraContext);

  useEffect(() => {
    if (name === '') {
      setIsExtraItem(true);
    }
  }, []);

  const onDelete = (e) => {
    const re = /\d+/;
    const number = Number(re.exec(e.target.parentNode.textContent));

    const newExtraPrices = extraPrices.filter((price) => price !== number);

    setExtraPrices(newExtraPrices);
    setSubTotal(subTotal - price * itemAmount);
  };

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
      <div className={styles.delete}>
        {`${name} $${price}`}
        {isExtraItem && showDelete && <button onClick={onDelete}>刪除</button>}
      </div>
      <div className={styles.ItemAmount}>{itemAmount}</div>
      <div className={styles.ItemControl}>
        <button onClick={onMinusOne}>−</button>
        <button onClick={onAddOne}>+</button>
      </div>
    </div>
  );
};

export default Item;
