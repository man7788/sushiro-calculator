import styles from './Form.module.css';
import { useState } from 'react';

const Form = ({ extraPrices, setExtraPrices }) => {
  const [newPrice, setNewPrice] = useState('');

  const onSubmitTask = (e) => {
    e.preventDefault();

    const newPriceList = [...extraPrices];
    newPriceList.push(Number(newPrice));

    setExtraPrices(newPriceList);
    setNewPrice('');
  };

  const onhandleChange = (e) => {
    setNewPrice(e.target.value);
  };

  return (
    <>
      <div className={styles.others}>另加項目</div>
      <div className={styles.othersForm}>
        <form method="" onSubmit={onSubmitTask}>
          <label htmlFor="extra-price"> 價錢:</label>
          <input
            onChange={onhandleChange}
            value={newPrice}
            type="number"
            id="extra-price"
            min="1"
            max="999"
            required
          />
          <button type="submit">加入</button>
        </form>
      </div>
    </>
  );
};

export default Form;
