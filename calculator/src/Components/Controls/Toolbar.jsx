import styles from './Toolbar.module.css';
import { useState, useEffect, useContext } from 'react';
import { ExtraContext } from '../../Contexts/ExtraContext';
import Select from './Select';

const Toolbar = () => {
  const { extraPrices, setExtraPrices, showDelete, setShowDelete } =
    useContext(ExtraContext);
  const [showSelect, setShowSelect] = useState(false);

  useEffect(() => {
    if (extraPrices.length < 1) {
      setShowDelete(false);
    }
  }, [extraPrices]);

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
    <div className={styles.ToolbarContainer}>
      {showSelect && (
        <Select extraPrices={extraPrices} setExtraPrices={setExtraPrices} />
      )}
      <div className={styles.Toolbar}>
        <button
          style={showSelect ? clickedSelect : null}
          onClick={onShowSelect}>
          加入
        </button>
        <button
          style={showDelete ? clickedDelete : null}
          onClick={onShowDelete}>
          修改
        </button>
      </div>
    </div>
  );
};

const clickedSelect = {
  background: '#fff',
  color: 'rgb(26, 18, 16)',
};

const clickedDelete = {
  background: '#fff',
  color: 'rgb(26, 18, 16)',
};

export default Toolbar;
