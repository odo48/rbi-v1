import React, { createContext, useState, PropsWithChildren } from 'react';
import IGeneralContext, { IMenu, IItems, ISection } from './types';

export const GeneralContext = createContext({} as IGeneralContext);

const GeneralProvider = (props: PropsWithChildren) => {
  const [menu, setMenu] = useState<IMenu>();
  const [items, setItems] = useState<Array<IItems>>();
  const [sections, setSections] = useState<Array<ISection>>();
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [history, setHistory] = useState<string[]>(['all']);
  const [position, setPosition] = useState<number>(0);

  return (
    <GeneralContext.Provider
      value={
        {
          menu,
          items,
          sections,
          selectedSection,
          history,
          position,
          setMenu,
          setItems,
          setSections,
          setSelectedSection,
          setHistory,
          setPosition,
        } as IGeneralContext
      }
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
