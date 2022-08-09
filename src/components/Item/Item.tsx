import React from 'react';
import styles from './Item.module.scss';
import IItems from 'components/Items/types';

const Item = (props: IItems) => {
  const { name, image, id, isMenu, onItemClick } = props;

  const onClick = () => {
    onItemClick(id, isMenu);
  };

  return (
    <div className={styles['item']}>
      <img className={styles['item--img']} src={`images/${image}`} alt={name} />
      <div className={styles['item--info']}>
        <div className={styles['item--info__title']}>{name}</div>
        <button onClick={onClick} className={styles['item--info__btn']}>
          <i className="bi-chevron-right" />
        </button>
      </div>
    </div>
  );
};

export default Item;
