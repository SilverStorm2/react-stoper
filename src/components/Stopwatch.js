import { useEffect, useState } from 'react';
import FormattedTime from './FormattedTime';
import styles from './Stopwatch.module.scss';

const Stopwatch = () => {
  const [elapsed, setElapsed] = useState(0);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    return () => {
      if (timerId) {
        window.clearInterval(timerId);
      }
    };
  }, [timerId]);

  const start = () => {
    setTimerId((currentId) => {
      if (currentId) {
        return currentId;
      }

      const id = window.setInterval(() => {
        setElapsed((prevElapsed) => prevElapsed + 10);
      }, 10);

      return id;
    });
  };

  const stop = () => {
    setTimerId((currentId) => {
      if (currentId) {
        window.clearInterval(currentId);
      }
      return null;
    });
  };

  const reset = () => {
    stop();
    setElapsed(0);
  };

  const isRunning = Boolean(timerId);

  return (
    <section className={styles.stopwatch}>
      <FormattedTime time={elapsed} />
      <div className={styles.controls}>
        <button
          type="button"
          className={`${styles.button} ${styles.start}`}
          onClick={start}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          type="button"
          className={`${styles.button} ${styles.stop}`}
          onClick={stop}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button
          type="button"
          className={`${styles.button} ${styles.reset}`}
          onClick={reset}
          disabled={elapsed === 0 && !isRunning}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default Stopwatch;
