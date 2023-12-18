import styles from './Header.module.css';
const Total = ({ total }) => {
  return (
    <div className={styles.total}>
      <div>合計</div>
      <div className={styles.totalPrice}>
        <div>$</div>
        <div> {total}</div>
      </div>
    </div>
  );
};

export default Total;
