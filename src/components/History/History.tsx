import React, { useContext } from 'react';
import styles from './History.module.scss';
import { GeneralContext } from 'contexts/GeneralContext';
import IGeneralContext from 'contexts/types';

const History = () => {
  const { history, setSelectedSection, position, setPosition } = useContext(
    GeneralContext
  ) as IGeneralContext;

  const onClick = (increase: boolean) => {
    setPosition(increase ? position + 1 : position - 1);

    history &&
      setSelectedSection(history[increase ? position + 1 : position - 1]);
  };

  if (history && history.length <= 1) return <></>;

  return (
    <div className={styles['history']}>
      <button
        onClick={() => onClick(false)}
        disabled={position === 0}
        className={styles['history--btn']}
      >
        <i className="bi-chevron-left" />
      </button>
      <button
        onClick={() => onClick(true)}
        disabled={position + 1 === history?.length}
        className={styles['history--btn']}
      >
        <i className="bi-chevron-right" />
      </button>
    </div>
  );
};

export default History;
