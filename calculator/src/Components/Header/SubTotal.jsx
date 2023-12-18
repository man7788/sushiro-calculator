import styles from './Header.module.css';
const SubTotal = ({ subTotal }) => {
  return (
    <div className={styles.subTotal}>
      <div>小計</div>
      <div className={styles.subTotalPrice}>
        <div>$</div>
        <div> {subTotal}</div>
      </div>
    </div>
  );
};

export default SubTotal;
