import styles from './Select.module.css';
import { useState } from 'react';
import Button from './Button';
import Form from './Form';

const Select = ({ extraPrices, setExtraPrices }) => {
  const [newPrice, setNewPrice] = useState('');
  const prices = [8, 9, 12, 17, 19, 22, 24, 27, 32, 39, 59];

  const onHandleClick = (e) => {
    const re = /\d+/;
    const number = re.exec(e.target.textContent);

    const newPriceList = [...extraPrices];
    newPriceList.push(Number(number[0]));

    setExtraPrices(newPriceList);
  };

  return (
    <div className={styles.Select}>
      {prices.map((price) => {
        let clicked = null;
        if (extraPrices.includes(price)) {
          clicked = true;
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
      <Form
        newPrice={newPrice}
        setNewPrice={setNewPrice}
        extraPrices={extraPrices}
        setExtraPrices={setExtraPrices}
      />
    </div>
  );
};

export default Select;
