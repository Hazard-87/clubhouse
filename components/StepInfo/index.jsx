import clsx from 'clsx';
import styles from './StepInfo.module.scss';


export const StepInfo = () => {
  return (
    <div className={clsx(styles.block, 'text-center')}>
      <div>
        <img className={styles.img} src='' alt="Step picture" />
      </div>
      <b className={styles.title}></b>
    </div>
  );
};
