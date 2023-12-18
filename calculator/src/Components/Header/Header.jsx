import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import SubTotal from './SubTotal';
import ServiceCharge from './ServiceCharge';

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
      <ServiceCharge serviceCharge={serviceCharge} />
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
