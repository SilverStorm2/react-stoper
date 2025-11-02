import styles from './FormattedTime.module.scss';

const pad = (value) => String(value).padStart(2, '0');

const formatTime = (elapsed) => {
  const hours = Math.floor(elapsed / 3_600_000);
  const minutes = Math.floor((elapsed % 3_600_000) / 60_000);
  const seconds = Math.floor((elapsed % 60_000) / 1_000);
  const milliseconds = Math.floor((elapsed % 1_000) / 10);

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
};

const FormattedTime = ({ time }) => (
  <div className={styles.time}>{formatTime(time)}</div>
);

export default FormattedTime;
