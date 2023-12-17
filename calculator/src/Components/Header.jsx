import { useEffect, useState } from 'react';
import styles from './Header.module.css';

function Header({ newAmount = 0 }) {
  const [amount, setAmout] = useState(0);

  useEffect(() => {
    setAmout(newAmount);
  }, [amount]);

  return (
    <div className={styles.Header}>
      <div>總消費（含加一服務費）</div>
      <div>${amount}</div>
    </div>
  );
}

export default Header;
