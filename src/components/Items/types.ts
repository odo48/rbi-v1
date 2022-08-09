import { ISection } from 'contexts/types';

export default interface IItem extends ISection {
  onItemClick: (id?: string, isMenu?: boolean) => {};
}
