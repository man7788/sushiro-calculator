import styles from './Body.module.css';
import Red from './Dishes/Red';
import Silver from './Dishes/Silver';
import Gold from './Dishes/Gold';

const Body = () => {
  return (
    <div className={styles.Body}>
      <Red />
      <Silver />
      <Gold />
    </div>
  );
};

export default Body;
