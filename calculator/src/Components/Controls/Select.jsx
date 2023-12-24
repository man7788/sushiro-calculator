import styles from './Select.module.css';
import { useState, useContext, useEffect } from 'react';
import Button from './Button';
import { BodyContext } from '../../Contexts/BodyContext';

const Select = ({ extraPrices, setExtraPrices }) => {
  const BodyDom = useContext(BodyContext);

  const [prices, setPrices] = useState([
    8, 9, 12, 17, 19, 22, 24, 27, 32, 39, 59,
  ]);

  useEffect(() => {
    BodyDom.current.scrollIntoView(false);
  }, [extraPrices]);

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
      <div>加入價錢:</div>
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
  border: '2px solid rgb(167, 8, 25)',
};

export default Select;
