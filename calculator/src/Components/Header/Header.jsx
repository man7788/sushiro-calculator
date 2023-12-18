import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import SubTotal from './SubTotal';

const Header = ({ subTotal }) => {
  const [finalTotal, setFinaltotal] = useState(0);
  const [serviceCharge, setServiceCharge] = useState(0);

  useEffect(() => {
    setServiceCharge(Math.trunc(subTotal * 0.1));
    setFinaltotal(subTotal + serviceCharge);
  }, [subTotal]);

  useEffect(() => {
    setFinaltotal(subTotal + serviceCharge);
  }, [serviceCharge]);

  return (
    <div className={styles.Header}>
      <SubTotal subTotal={subTotal} />
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
