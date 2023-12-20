import { useState } from 'react';
import styles from './Body.module.css';
import Item from './Items/Item';
import Form from './Items/Form';
import Extra from './Items/Extra';
import Select from './Items/Select';

const Body = () => {
  const [extraPrices, setExtraPrices] = useState([]);

  return (
    <div className={styles.Body}>
      <Item name={'紅碟'} price={12} />
      <Item name={'銀碟'} price={17} />
      <Item name={'金碟'} price={22} />
      <Item name={'黑碟'} price={27} />
      <Extra extraPrices={extraPrices} />
      <div className={styles.others}>另加項目</div>
      {/* Not allowed duplicated price */}
      <Select extraPrices={extraPrices} setExtraPrices={setExtraPrices} />
      <Form extraPrices={extraPrices} setExtraPrices={setExtraPrices} />
    </div>
  );
};

export default Body;
