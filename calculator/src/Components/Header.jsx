import styles from './Header.module.css';

const Header = ({ total }) => {
  // const [finalAmount, setFinalAmount] = useState(0);
  // useEffect(() => {
  //   setFinalAmount(total * 1.1);
  // }, [total]);

  return (
    <div className={styles.Header}>
      <div>總消費（含加一服務費）</div>
      <div>${total}</div>
    </div>
  );
};

export default Header;
