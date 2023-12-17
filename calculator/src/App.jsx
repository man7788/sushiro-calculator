import styles from './App.module.css';
import Header from './Components/Header';
import Body from './Components/Body';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
