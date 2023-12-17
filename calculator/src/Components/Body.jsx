import styles from './Body.module.css';
import Red from './Dishes/Red';
import Silver from './Dishes/Silver';
import Gold from './Dishes/Gold';
import Black from './Dishes/Black';

const Body = () => {
  return (
    <div className={styles.Body}>
      <Red />
      <Silver />
      <Gold />
      <Black />
    </div>
  );
};

export default Body;
