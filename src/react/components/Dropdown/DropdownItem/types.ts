import { IDropdown, TDropdownItem } from '../types';

export interface IDropdownItemProps
  extends Pick<IDropdown, 'onClickItem' | 'targetItem'> {
  item: TDropdownItem;
}
