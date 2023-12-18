import styles from './Header.module.css';
const ServiceCharge = ({ serviceCharge }) => {
  return (
    <div className={styles.serviceCharge}>
      <div>服務費</div>
      <div className={styles.serviceCharge}>
        <div>$</div>
        <div> {serviceCharge}</div>
      </div>
    </div>
  );
};

export default ServiceCharge;
