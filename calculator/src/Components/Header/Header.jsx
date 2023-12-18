import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import SubTotal from './SubTotal';
import ServiceCharge from './ServiceCharge';
import Total from './Total';

const Header = ({ subTotal }) => {
  const [total, setTotal] = useState(0);
  const [serviceCharge, setServiceCharge] = useState(0);

  useEffect(() => {
    setServiceCharge(Math.trunc(subTotal * 0.1));
    setTotal(subTotal + serviceCharge);
  }, [subTotal]);

  useEffect(() => {
    setTotal(subTotal + serviceCharge);
  }, [serviceCharge]);

  return (
    <div className={styles.Header}>
      <SubTotal subTotal={subTotal} />
      <ServiceCharge serviceCharge={serviceCharge} />
      <Total total={total} />
    </div>
  );
};

export default Header;
