export type TDropdownItem = string;

export interface IDropdown {
  dropdownItems: TDropdownItem[];
  onClickItem: (item: TDropdownItem) => void;
  targetItem: string;
  className?: string;
}
