import React from 'react';
import styles from './Welcome.module.scss';

const Welcome = () => {
  return (
    <div className={styles['welcome']}>
      <div className={styles['welcome--title']}>
        Skip <br /> &nbsp; the <br /> line
      </div>
      <a href="#dashboard" className={styles['welcome--cta']}>
        Let's eat <i className="bi-chevron-down"></i>
      </a>
    </div>
  );
};

export default Welcome;
