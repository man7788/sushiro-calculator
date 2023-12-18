import styles from './Body.module.css';
import Item from './Dishes/Item';
import Sushi from './Dishes/Sushi';

const Body = () => {
  return (
    <div className={styles.Body}>
      <Sushi name={'紅碟'} price={12} />
      <Sushi name={'銀碟'} price={17} />
      <Sushi name={'金碟'} price={22} />
      <Sushi name={'黑碟'} price={27} />
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
