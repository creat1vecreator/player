import React, { FC } from 'react';
import { IDropdownItemProps } from './types';
import styles from './DropdownItem.module.scss';

export const DropdownItem: FC<IDropdownItemProps> = ({
  item,
  onClickItem,
}: IDropdownItemProps) => {
  return (
    <div className={styles.DropdownItem} onClick={() => onClickItem(item)}>
      <div className={styles.DropdownItem__label}>{item}</div>
    </div>
  );
};
