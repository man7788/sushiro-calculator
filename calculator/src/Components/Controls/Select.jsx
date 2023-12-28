import styles from './Select.module.css';
import { useState } from 'react';
import Button from './Button';

const Select = ({ extraPrices, setExtraPrices }) => {
  const [prices, setPrices] = useState([
    8, 9, 12, 17, 19, 22, 24, 27, 32, 39, 59,
  ]);

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
      {prices.map((price) => {
        let clicked = null;
        if (extraPrices.includes(price)) {
          clicked = clickedStyle;
        }
        return (
          <Button
            key={price}
            price={price}
            onHandleClick={onHandleClick}
            clicked={clicked}
          />
        );
      })}
    </div>
  );
};

const clickedStyle = {
  background: '#fff',
  color: 'rgb(26, 18, 16)',
};

export default Select;
