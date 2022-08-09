import { ISection } from 'contexts/types';

export default interface IItems extends ISection {
  onItemClick: (id?: string, isMenu?: boolean) => {};
}
