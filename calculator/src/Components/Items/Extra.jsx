import { useContext, useEffect, useState } from 'react';
import { ExtraContext } from '../../Contexts/ExtraContext';
import Item from './Item';

const Extra = ({ showDelete }) => {
  const { extraPrices } = useContext(ExtraContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = [...extraPrices];
    newItems.sort((a, b) => a - b);
    setItems(newItems);
  }, [extraPrices]);

  return (
    <>
      {items.map((item) => {
        return <Item key={item} price={item} showDelete={showDelete} />;
      })}
    </>
  );
};

export default Extra;
