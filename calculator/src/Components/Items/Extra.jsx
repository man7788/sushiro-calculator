import Item from './Item';

const Extra = ({ extraPrices, setExtraPrices }) => {
  return (
    <>
      {extraPrices.map((item) => {
        return (
          <Item
            key={item}
            price={item}
            extraPrices={extraPrices}
            setExtraPrices={setExtraPrices}
          />
        );
      })}
    </>
  );
};

export default Extra;
