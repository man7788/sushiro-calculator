import { useState, useRef } from 'react';
import styles from './Body.module.css';
import Item from './Items/Item';
import Form from './Controls/Form';
import Extra from './Items/Extra';
import Select from './Controls/Select';
import Toolbar from './Controls/Toolbar';
import { ExtraContext } from '../Contexts/ExtraContext';
import { BodyContext } from '../Contexts/BodyContext';

const Body = () => {
  const [extraPrices, setExtraPrices] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const allExtraItems = useRef({});
  const BodyDom = useRef(null);

  return (
    <BodyContext.Provider value={BodyDom}>
      <ExtraContext.Provider value={{ allExtraItems }}>
        <div className={styles.Body} ref={BodyDom}>
          <Item name={'紅碟'} price={12} />
          <Item name={'銀碟'} price={17} />
          <Item name={'金碟'} price={22} />
          <Item name={'黑碟'} price={27} />
          {extraPrices.length > 0 && (
            <Toolbar
              extraPrices={extraPrices}
              setExtraPrices={setExtraPrices}
              showDelete={showDelete}
              setShowDelete={setShowDelete}
            />
          )}
          <Extra
            extraPrices={extraPrices}
            setExtraPrices={setExtraPrices}
            showDelete={showDelete}
          />
          {/* <div className={styles.others}>加入項目</div> */}
          <Select extraPrices={extraPrices} setExtraPrices={setExtraPrices} />
          {/* <Form extraPrices={extraPrices} setExtraPrices={setExtraPrices} /> */}
        </div>
      </ExtraContext.Provider>
    </BodyContext.Provider>
  );
};

export default Body;
