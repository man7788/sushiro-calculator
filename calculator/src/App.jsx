import styles from './App.module.css';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Body from './Components/Body';
import { totalContext } from './Contexts/totalContext';

const App = () => {
  const [total, setTotal] = useState(0);

  return (
    <div className={styles.App}>
      <Header total={total} />
      <totalContext.Provider value={{ total, setTotal }}>
        <Body />
      </totalContext.Provider>
    </div>
  );
};

export default App;
