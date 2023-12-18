import styles from './Body.module.css';
import Red from './Dishes/Red';
import Silver from './Dishes/Silver';
import Gold from './Dishes/Gold';
import Black from './Dishes/Black';
import Item from './Dishes/Item';

const Body = () => {
  return (
    <div className={styles.Body}>
      <Red />
      <Silver />
      <Gold />
      <Black />
      <Item price={8} />
      <Item price={12} />
      <Item price={17} />
      <Item price={19} />
      <Item price={22} />
      <Item price={24} />
      <Item price={27} />
      <Item price={32} />
      <Item price={39} />
      <Item price={59} />
    </div>
  );
};

export default Body;
