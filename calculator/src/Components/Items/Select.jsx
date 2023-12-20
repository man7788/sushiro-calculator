import styles from './Select.module.css';
import { useState } from 'react';

const Select = ({ extraPrices, setExtraPrices }) => {
  const [prices, setPrices] = useState([8, 12, 17, 19, 22, 24, 27, 32, 39, 59]);

  const onHandleClick = (e) => {
    const re = /\d+/;
    const number = re.exec(e.target.textContent);

    const newPriceList = [...extraPrices];
    newPriceList.push(Number(number[0]));

    clearClickedPrice(Number(number[0]));
    setExtraPrices(newPriceList);
  };

  const clearClickedPrice = (clickedPrice) => {
    const newPrices = prices.filter((price) => price !== clickedPrice);
    setPrices(newPrices);
  };

  return (
    <div className={styles.Select}>
      <div>選擇價錢:</div>
      {prices.map((price) => {
        return (
          <button key={price} onClick={onHandleClick}>{`$${price}`}</button>
        );
      })}
    </div>
  );
};

export default Select;
