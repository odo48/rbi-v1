import React, { useContext, useState, useEffect, useCallback } from 'react';
import styles from './Items.module.scss';
import { GeneralContext } from 'contexts/GeneralContext';
import { ISection, IItems, IMenuOptions } from 'contexts/types';
import Item from 'components/Item';

const Items = () => {
  const { sections, selectedSection, items, setSelectedSection, history } =
    useContext(GeneralContext);

  const [usedItems, setUsedItems] = useState<Array<ISection>>();

  const selectItems = useCallback(() => {
    let localOptions = sections?.filter(
      (section: ISection) => section.id === selectedSection
    )[0]?.options;

    if (localOptions) {
      let localUsedItems = [] as Array<ISection>;
      items?.forEach((item: IItems) => {
        localOptions?.forEach((option: IMenuOptions) => {
          if (item.id === option.ref) {
            localUsedItems.push(item);
          }
        });
      });

      setUsedItems([...new Set(localUsedItems)]);
    }
  }, [selectedSection, sections, items]);

  const onItemClick = (id?: string, isMenu?: boolean) => {
    setSelectedSection(id);

    if (isMenu) {
      selectItems();
    }
  };

  useEffect(() => {
    if (selectedSection === 'all') {
      setUsedItems(sections?.filter((section: ISection) => section.isMenu));
      return;
    } else {
      selectItems();
    }
  }, [selectedSection, sections, selectItems]);

  return (
    <div
      className={`${styles['items']} ${
        history && history.length > 1 ? styles['items--with-history'] : ''
      }`}
    >
      {usedItems?.map((section: any, index: number) => {
        return (
          <Item
            onItemClick={onItemClick}
            {...section}
            key={`${section.id + index}`}
          />
        );
      })}
    </div>
  );
};

export default Items;
