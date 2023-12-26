import { useState, useEffect, useRef } from 'react';
import styles from './Body.module.css';
import Item from './Items/Item';
import Form from './Controls/Form';
import Extra from './Items/Extra';
import { BodyContext } from '../Contexts/BodyContext';

const Body = () => {
  const BodyDom = useRef(null);

  return (
    <BodyContext.Provider value={BodyDom}>
      <div className={styles.Body} ref={BodyDom}>
        <Item name={'紅碟'} price={12} />
        <Item name={'銀碟'} price={17} />
        <Item name={'金碟'} price={22} />
        <Item name={'黑碟'} price={27} />
        <Extra />
        {/* <Form extraPrices={extraPrices} setExtraPrices={setExtraPrices} /> */}
      </div>
    </BodyContext.Provider>
  );
};

export default Body;
