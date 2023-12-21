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
    clickedPrice.style = clickedStyle;
  };

  return (
    <div className={styles.Select}>
      <div>選擇價錢:</div>
      {prices.map((price) => {
        let clicked = null;
        if (extraPrices.includes(price)) {
          clicked = clickedStyle;
        }
        return (
          <button
            key={price}
            style={clicked}
            onClick={clicked ? null : onHandleClick}>{`$${price}`}</button>
        );
      })}
    </div>
  );
};

const clickedStyle = {
  background: '#fff',
  color: 'rgb(26, 18, 16)',
  border: '2px solid rgb(167, 8, 25)',
};

export default Select;
