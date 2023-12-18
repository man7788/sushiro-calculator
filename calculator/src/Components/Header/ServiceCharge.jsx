import styles from './Header.module.css';
const ServiceCharge = ({ serviceCharge }) => {
  return (
    <div className={styles.headerItem}>
      <div>服務費</div>
      <div className={styles.headerPrice}>
        <div>$</div>
        <div> {serviceCharge}</div>
      </div>
    </div>
  );
};

export default ServiceCharge;
