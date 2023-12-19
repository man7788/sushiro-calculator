import { useState } from 'react';
import styles from './Body.module.css';
import Item from './Items/Item';
import Form from './Items/Form';
import Extra from './Items/Extra';

const Body = () => {
  const [extraPrices, setExtraPrices] = useState([]);

  return (
    <div className={styles.Body}>
      <Item name={'紅碟'} price={12} />
      <Item name={'銀碟'} price={17} />
      <Item name={'金碟'} price={22} />
      <Item name={'黑碟'} price={27} />
      <Extra extraPrices={extraPrices} />
      <Form extraPrices={extraPrices} setExtraPrices={setExtraPrices} />
    </div>
  );
};

export default Body;
