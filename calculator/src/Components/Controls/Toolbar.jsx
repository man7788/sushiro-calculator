import styles from './Toolbar.module.css';
import { useState, useContext } from 'react';
import { ExtraContext } from '../../Contexts/ExtraContext';
import Select from './Select';

const Toolbar = () => {
  const { extraPrices, setExtraPrices } = useContext(ExtraContext);
  const [showSelect, setShowSelect] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const onShowSelect = () => {
    if (!showSelect) {
      setShowSelect(!showSelect);
    } else {
      setShowSelect(!showSelect);
    }
  };

  const onShowDelete = () => {
    if (!showDelete) {
      setShowDelete(!showDelete);
    } else {
      setShowDelete(!showDelete);
    }
  };

  return (
    <div className={styles.Toolbar}>
      {showSelect && (
        <Select extraPrices={extraPrices} setExtraPrices={setExtraPrices} />
      )}
      <button style={showSelect ? clickedSelect : null} onClick={onShowSelect}>
        加入
      </button>
      <button onClick={onShowDelete}>刪除</button>
    </div>
  );
};

const clickedSelect = {
  background: '#fff',
  color: 'rgb(26, 18, 16)',
  border: '2px solid rgb(167, 8, 25)',
};

export default Toolbar;
