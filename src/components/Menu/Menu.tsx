import React, { useContext } from 'react';
import styles from './Menu.module.scss';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { GeneralContext } from 'contexts/GeneralContext';
import IGeneralContext from 'contexts/types';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 4,
    partialVisibilityGutter: 15,
  },
};

const Menu = () => {
  const {
    menu,
    setSelectedSection,
    selectedSection,
    setHistory,
    history,
    setPosition,
    position,
  } = useContext(GeneralContext) as IGeneralContext;

  const onSectionClick = (selection: string) => {
    if (position !== history.length - 1) {
      setHistory([...history.slice(0, position + 1), selection]);
    } else {
      setHistory([...history, selection]);
    }
    setSelectedSection(selection);
    setPosition(position + 1);
  };

  return (
    <div className={styles['menu']}>
      {menu && (
        <Carousel arrows={false} partialVisible responsive={responsive}>
          <div
            onClick={() => onSectionClick('all')}
            className={styles['menu--item']}
          >
            <img
              className={styles['menu--item__img']}
              src="logo.png"
              alt="logo"
            />
            <div
              className={`${styles['menu--item__title']} ${
                selectedSection === 'all'
                  ? styles['menu--item__title--selected']
                  : null
              }`}
            >
              Menu
            </div>
          </div>
          {menu?.options?.map((option) => {
            return (
              <div
                className={styles['menu--item']}
                onClick={() => onSectionClick(option.ref)}
                key={option.key}
              >
                <img
                  className={styles['menu--item__img']}
                  src={`images/${option.image}`}
                  alt={option.name}
                />
                <div
                  className={`${styles['menu--item__title']} ${
                    selectedSection === option.ref
                      ? styles['menu--item__title--selected']
                      : null
                  }`}
                >
                  {option.name}
                </div>
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default Menu;
