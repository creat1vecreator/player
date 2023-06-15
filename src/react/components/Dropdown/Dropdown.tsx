import React, { FC } from 'react';
import cn from 'classnames/bind';
import { DropdownItem } from './DropdownItem';
import { IDropdown } from './types';
import styles from './Dropdown.module.scss';

const cx = cn.bind(styles);
export const Dropdown: FC<IDropdown> = ({
  dropdownItems,
  targetItem,
  onClickItem,
  className,
}: IDropdown) => {
  return (
    <div className={cx(styles.Dropdown, className)}>
      {dropdownItems.map((dropdownItem) => (
        <DropdownItem
          item={dropdownItem}
          targetItem={targetItem}
          onClickItem={onClickItem}
          key={dropdownItem}
        />
      ))}
    </div>
  );
};
