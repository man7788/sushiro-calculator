import styles from './Header.module.css';
const Total = ({ total }) => {
  return (
    <div className={styles.headerItem}>
      <div>合計</div>
      <div className={styles.headerPrice}>
        <div>$</div>
        <div> {total}</div>
      </div>
    </div>
  );
};

export default Total;
