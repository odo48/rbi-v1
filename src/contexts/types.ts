export interface IMenuOptions {
  key?: string;
  ref?: string;
  image?: string;
  name?: string;
}

export interface IMenu {
  name?: {
    en?: string;
    es?: string;
    fr?: string;
  };
  options?: Array<IMenuOptions>;
}

export interface ISection {
  id?: string;
  image?: string;
  name?: string;
  isMenu?: boolean;
  options?: Array<IMenuOptions>;
}

export interface IItems {
  id: string;
  name: string;
  image: string;
}

export default interface IGeneralContext {
  menu?: IMenu;
  sections?: Array<ISection>;
  items?: Array<IItems>;
  selectedSection?: string;
  history?: Array<string>;
  position?: number;
  setItems: (items?: Array<IItems>) => {};
  setSections: (section?: Array<ISection>) => {};
  setMenu: (menu?: IMenu) => {};
  setSelectedSection: (section?: string) => {};
  setHistory: (history: Array<string>) => {};
  setPosition: (position: number) => {};
}
