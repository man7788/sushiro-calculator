import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import Title from './Title';

const Header = ({ subTotal }) => {
  const [total, setTotal] = useState(0);
  const [serviceCharge, setServiceCharge] = useState(0);

  useEffect(() => {
    setServiceCharge(Math.round(subTotal * 0.1));
    setTotal(subTotal + serviceCharge);
  }, [subTotal]);

  useEffect(() => {
    setTotal(subTotal + serviceCharge);
  }, [serviceCharge]);

  return (
    <div className={styles.Header}>
      <Title title={'小計'} output={subTotal} />
      <Title title={'服務費'} output={serviceCharge} />
      <Title title={'合計'} output={total} />
    </div>
  );
};

export default Header;
