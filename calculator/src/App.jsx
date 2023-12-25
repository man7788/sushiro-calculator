import styles from './App.module.css';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Body from './Components/Body';
import Toolbar from './Components/Controls/Toolbar';
import { totalContext } from './Contexts/totalContext';
import { ExtraContext } from './Contexts/ExtraContext';

const App = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [extraPrices, setExtraPrices] = useState([]);

  return (
    <div className={styles.App}>
      <Header subTotal={subTotal} />
      <ExtraContext.Provider value={{ extraPrices, setExtraPrices }}>
        <totalContext.Provider value={{ subTotal, setSubTotal }}>
          <Body />
          <Toolbar
          // showDelete={showDelete}
          // setShowDelete={setShowDelete}
          />
        </totalContext.Provider>
      </ExtraContext.Provider>
    </div>
  );
};

export default App;
