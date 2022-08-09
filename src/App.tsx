import React, { useEffect, useContext } from 'react';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import { getMenu, getSections, getItems } from './api';
import { GeneralContext } from 'contexts/GeneralContext';
import IGeneralContext, { IMenuOptions, ISection } from 'contexts/types';
import { sortArray } from 'helpers/functions';

const App = () => {
  const { setMenu, setSections, setItems } = useContext(
    GeneralContext
  ) as IGeneralContext;

  useEffect(() => {
    const getData = async () => {
      const promiseMenu = getMenu();
      const promiseSections = getSections();
      const promiseItems = getItems();

      Promise.all([promiseMenu, promiseSections, promiseItems]).then(
        (values) => {
          let responseMenu = values[0];
          let responseSections = values[1];
          let responseItems = values[2];

          responseMenu.options = sortArray(responseMenu.options, '_ref');

          responseSections = sortArray(responseSections, '_id');

          let localSections = [] as Array<ISection>;
          let localMenuOptions = [] as Array<IMenuOptions>;

          responseSections.forEach((section: any) => {
            if (section?.carouselImage) {
              localMenuOptions.push({
                image: section.carouselImage?.asset?._ref,
                ref: section._id,
                name: section?.name?.en,
              });
            }

            localSections.push({
              id: section?._id,
              name: section?.name?.en,
              image: section?.image?.asset?._ref,
              isMenu: !!section?.carouselImage,
              options: section?.options?.map((option: any) => {
                return {
                  key: option?._key,
                  ref: option?._ref,
                };
              }),
            });
          });

          setMenu({
            name: {
              en: responseMenu?.name?.en,
              es: responseMenu?.name?.es,
              fr: responseMenu?.name?.fr,
            },
            options: responseMenu?.options.map((option: any, index: number) => {
              return {
                key: option?._key,
                ref: option?._ref,
                image: localMenuOptions[index]?.image,
                name: localMenuOptions[index]?.name,
              };
            }),
          });

          setSections(localSections);

          setItems(
            responseItems.map((item: any) => {
              return {
                id: item?._id,
                name: item?.name?.en,
                image: item?.image?.asset?._ref,
              };
            })
          );
        }
      );
    };

    getData();
  }, [setMenu, setSections, setItems]);

  return (
    <div>
      <Welcome />
      <Dashboard />
    </div>
  );
};

export default App;
