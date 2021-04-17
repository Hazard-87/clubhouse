import clsx from 'clsx';
import React from 'react';

import styles from './Button.module.scss';

const colors = {
  green: styles.buttonGreen,
  gray: styles.buttonGray,
  blue: styles.buttonBlue,
};

export const Button = ({ children, className }) => {
  return (
    <button
      type="button"
      className={clsx(className, styles.button)}>
      {children}
    </button>
  );
};
