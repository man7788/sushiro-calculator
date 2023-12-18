import styles from './Header.module.css';
const SubTotal = ({ subTotal }) => {
  return (
    <div className={styles.headerItem}>
      <div>小計</div>
      <div className={styles.headerPrice}>
        <div>$</div>
        <div> {subTotal}</div>
      </div>
    </div>
  );
};

export default SubTotal;
