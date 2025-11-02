import Stopwatch from './components/Stopwatch';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    <div className={styles.wrapper}>
      <Stopwatch />
    </div>
  </div>
);

export default App;
