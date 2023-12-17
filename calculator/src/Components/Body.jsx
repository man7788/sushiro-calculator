import styles from './Body.module.css';
import Red from './Dishes/Red';
import Silver from './Dishes/Silver';

const Body = () => {
  return (
    <div className={styles.Body}>
      <Red />
      <Silver />
    </div>
  );
};

export default Body;
