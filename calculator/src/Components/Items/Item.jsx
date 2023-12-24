import styles from './Item.module.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { totalContext } from '../../Contexts/totalContext';

const Item = ({
  name = '',
  price,
  extraPrices,
  setExtraPrices,
  showDelete,
}) => {
  const [itemAmount, setItemAmount] = useState(0);
  const { subTotal, setSubTotal } = useContext(totalContext);
  const itemDom = useRef(null);
  const [isExtraItem, setIsExtraItem] = useState(false);

  useEffect(() => {
    if (name === '') {
      setIsExtraItem(true);
    }
  }, []);

  const onDelete = (e) => {
    const re = /\d+/;
    const number = re.exec(e.target.nextSibling.textContent);

    const newExtraPrices = extraPrices.filter(
      (price) => price !== Number(number),
    );

    setExtraPrices(newExtraPrices);
    setSubTotal(subTotal - price * itemAmount);
    console.log(newExtraPrices);
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
        {isExtraItem && showDelete && <button onClick={onDelete}>刪除</button>}
        {`${name} $${price}`}
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
