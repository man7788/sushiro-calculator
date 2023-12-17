import styles from './Header.module.css';
import { useState, useEffect } from 'react';

const Header = ({ total }) => {
  const [finalTotal, setFinaltotal] = useState(0);
  const [serviceCharge, setServiceCharge] = useState(0);

  useEffect(() => {
    setServiceCharge(Math.trunc(total * 0.1));
    setFinaltotal(total + serviceCharge);
  }, [total]);

  useEffect(() => {
    setFinaltotal(total + serviceCharge);
  }, [serviceCharge]);

  return (
    <div className={styles.Header}>
      <div className={styles.subTotal}>小計</div>
      <div className={styles.subTotal}> {`$${total}`}</div>
      <div className={styles.serviceCharge}>服務費</div>
      <div className={styles.serviceCharge}>{`$${serviceCharge}`}</div>
      <div className={styles.finalTotal}>合計</div>
      <div className={styles.finalTotal}>{`$${finalTotal}`}</div>
    </div>
  );
};

export default Header;
