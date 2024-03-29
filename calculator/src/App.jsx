import styles from './App.module.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Body from './Components/Body';
import Toolbar from './Components/Controls/Toolbar';
import { totalContext } from './Contexts/totalContext';
import { ExtraContext } from './Contexts/ExtraContext';

const App = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [extraPrices, setExtraPrices] = useState([]);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = '';
      return '';
    };

    window.addEventListener('beforeunload', unloadCallback);
    return () => window.removeEventListener('beforeunload', unloadCallback);
  }, []);

  return (
    <div className={styles.App}>
      <Header subTotal={subTotal} />
      <ExtraContext.Provider
        value={{ extraPrices, setExtraPrices, showDelete, setShowDelete }}>
        <totalContext.Provider value={{ subTotal, setSubTotal }}>
          <Body />
        </totalContext.Provider>
        <Toolbar />
      </ExtraContext.Provider>
    </div>
  );
};

export default App;
