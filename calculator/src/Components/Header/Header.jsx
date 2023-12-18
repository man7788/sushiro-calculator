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
      <div className={styles.subTotal}>
        <div>小計</div>
        <div className={styles.subTotalPrice}>
          <div>$</div>
          <div> {total}</div>
        </div>
      </div>
      <div className={styles.serviceCharge}>
        <div>服務費</div>
        <div className={styles.serviceChargePrice}>
          <div>$</div>
          <div>{serviceCharge}</div>
        </div>
      </div>
      <div className={styles.finalTotal}>
        <div>合計</div>
        <div className={styles.finalTotalPrice}>
          <div>$</div>
          <div>{finalTotal}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
