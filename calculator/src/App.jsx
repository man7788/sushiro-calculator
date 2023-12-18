import styles from './App.module.css';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Body from './Components/Body';
import { totalContext } from './Contexts/totalContext';

const App = () => {
  const [subTotal, setSubTotal] = useState(0);

  return (
    <div className={styles.App}>
      <Header subTotal={subTotal} />
      <totalContext.Provider value={{ subTotal, setSubTotal }}>
        <Body />
      </totalContext.Provider>
    </div>
  );
};

export default App;
