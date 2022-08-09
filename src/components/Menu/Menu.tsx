import React, { useContext } from 'react';
import styles from './Menu.module.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { GeneralContext } from 'contexts/GeneralContext';
import IGeneralContext from 'contexts/types';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

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

  const getCurrentSlide = () => {
    if (selectedSection === 'all') {
      return 0;
    } else {
      return menu.options
        .map(function (el) {
          return el.ref;
        })
        .indexOf(selectedSection);
    }
  };

  return (
    <div className={styles['menu']}>
      {menu && (
        <CarouselProvider
          naturalSlideWidth={150}
          naturalSlideHeight={125}
          totalSlides={menu.options.length + 1}
          visibleSlides={4}
          isIntrinsicHeight
          currentSlide={getCurrentSlide()}
        >
          <Slider>
            <Slide
              onClick={() => onSectionClick('all')}
              className={styles['menu--item']}
              index={0}
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
            </Slide>
            {menu?.options?.map((option, index) => {
              return (
                <Slide
                  index={index + 1}
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
                </Slide>
              );
            })}
          </Slider>
        </CarouselProvider>
      )}
    </div>
  );
};

export default Menu;
