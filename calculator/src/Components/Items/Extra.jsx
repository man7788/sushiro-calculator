import { useContext } from 'react';
import { ExtraContext } from '../../Contexts/ExtraContext';
import Item from './Item';

const Extra = ({ showDelete }) => {
  const { extraPrices } = useContext(ExtraContext);

  return (
    <>
      {extraPrices.map((item) => {
        return <Item key={item} price={item} showDelete={showDelete} />;
      })}
    </>
  );
};

export default Extra;
