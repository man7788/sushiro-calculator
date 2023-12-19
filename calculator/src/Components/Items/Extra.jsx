import Item from './Item';

const Extra = ({ extraPrices }) => {
  return (
    <>
      {extraPrices.map((item) => {
        return <Item key={item} price={item} />;
      })}
    </>
  );
};

export default Extra;
