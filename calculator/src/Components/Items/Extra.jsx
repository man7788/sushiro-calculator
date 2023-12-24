import Item from './Item';

const Extra = ({ extraPrices, setExtraPrices, showDelete }) => {
  return (
    <>
      {extraPrices.map((item) => {
        return (
          <Item
            key={item}
            price={item}
            extraPrices={extraPrices}
            setExtraPrices={setExtraPrices}
            showDelete={showDelete}
          />
        );
      })}
    </>
  );
};

export default Extra;
