/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import cn from 'classnames';
import Input from './Input';
import styles from './Input.module.scss';

const InputLight = ({ type, label, id, name, value, className, ...props }) => {
  const classNames = cn(className, styles.inputLight);

  return React.cloneElement(
    <Input reset type={type} label={label} id={id} name={name} value={value} />,
    {
      ...props,
      className: classNames,
    }
  );
};

export default InputLight;
