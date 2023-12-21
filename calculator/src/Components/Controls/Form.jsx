import styles from './Form.module.css';
import { useState } from 'react';

const Form = ({ extraPrices, setExtraPrices }) => {
  const [newPrice, setNewPrice] = useState('');

  const onhandleChange = (e) => {
    setNewPrice(Number(e.target.value));
  };

  const onSubmitTask = (e) => {
    e.preventDefault();

    if (!extraPrices.includes(newPrice)) {
      const newPriceList = [...extraPrices];
      newPriceList.push(newPrice);
      setExtraPrices(newPriceList);
      setNewPrice('');
    } else {
      console.log('on99');
    }
  };

  return (
    <div className={styles.othersForm}>
      <form method="" onSubmit={onSubmitTask}>
        <label htmlFor="extra-price"> 價錢:</label>
        <input
          onChange={onhandleChange}
          value={newPrice}
          type="number"
          id="extra-price"
          placeholder="輸入價錢"
          min="1"
          max="999"
          required
        />
        <button type="submit">加入</button>
      </form>
    </div>
  );
};

export default Form;
