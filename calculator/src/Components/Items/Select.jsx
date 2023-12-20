import styles from './Select.module.css';
import { useState } from 'react';

const Select = ({ extraPrices, setExtraPrices }) => {
  const [prices, setPrices] = useState([8, 12, 17, 19, 22, 24, 27, 32, 39, 59]);

  const onHandleClick = (e) => {
    const re = /\d+/;
    const number = re.exec(e.target.textContent);

    const newPriceList = [...extraPrices];
    newPriceList.push(Number(number[0]));

    changeClickedPrice(e.target);
    setExtraPrices(newPriceList);
  };

  const changeClickedPrice = (clickedPrice) => {
    console.dir(clickedPrice);
    clickedPrice.style.background = '#fff';
    clickedPrice.style.color = 'rgb(26, 18, 16)';
    clickedPrice.style.border = '2px solid rgb(167, 8, 25)';
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
