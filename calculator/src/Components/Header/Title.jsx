import styles from './Header.module.css';

const Title = ({ title, output }) => {
  return (
    <div className={styles.headerItem}>
      <div>{title}</div>
      <div className={styles.headerPrice}>
        <div>$</div>
        <div> {output}</div>
      </div>
    </div>
  );
};

export default Title;
