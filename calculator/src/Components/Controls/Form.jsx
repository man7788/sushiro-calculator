import styles from './Form.module.css';

const Form = ({ newPrice, setNewPrice, extraPrices, setExtraPrices }) => {
  const onHandleChange = (e) => {
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
      alert('請使用現有價錢項目');
    }
  };

  return (
    <div className={styles.Form}>
      <form method="" onSubmit={onSubmitTask}>
        <label htmlFor="extra-price"> 價錢:</label>
        <input
          onChange={onHandleChange}
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
