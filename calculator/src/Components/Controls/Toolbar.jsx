const Toolbar = ({ showDelete, setShowDelete }) => {
  const onShowDelete = () => {
    if (!showDelete) {
      setShowDelete(!showDelete);
    } else {
      setShowDelete(!showDelete);
    }
  };

  return (
    <div>
      <button onClick={onShowDelete}>刪除</button>
    </div>
  );
};

export default Toolbar;
