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
          className={showSelect ? styles.activeButton : styles.defaultButton}
          onClick={onShowSelect}>
          加入
        </button>
        <button
          className={showDelete ? styles.activeButton : styles.defaultButton}
          onClick={onShowDelete}>
          修改
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
