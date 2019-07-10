/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Icon from '../Icon';
import colors from '../../styles/colors';
import styles from './Button.module.scss';

const Button = React.forwardRef(
  (
    {
      id,
      children,
      size,
      theme,
      disabled,
      type,
      iconComponent,
      reverse,
      onClick,
      dataQa,
      className,
      style,
      title,
      fill,
    },
    ref
  ) => {
    const classNames = cn(
      'toolkit',
      styles.button,
      styles[size],
      styles[theme],
      {
        [styles.icon]: iconComponent,
        [styles.reverse]: reverse,
        [styles.onlyIcon]: !children && !title,
      },
      className
    );

    return (
      // eslint-disable-next-line react/button-has-type
      <button
        id={id}
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={classNames}
        data-qa={dataQa}
        ref={ref}
        style={style}
      >
        {iconComponent && (
          <Icon component={iconComponent} size="16" fill={fill} />
        )}
        {children && children}
        {title && title}
      </button>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dataQa: PropTypes.string,
  disabled: PropTypes.bool,
  fill: PropTypes.string,
  iconComponent: PropTypes.node,
  id: PropTypes.string,
  onClick: PropTypes.func,
  reverse: PropTypes.bool,
  size: PropTypes.oneOf(['big', 'default', 'small', 'xsmall']),
  theme: PropTypes.oneOf([
    'default',
    'link',
    'primary',
    'secondary',
    'ghost',
    'reset',
  ]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu']),
  style: PropTypes.shape({}),
};

Button.displayName = 'Button';

Button.defaultProps = {
  children: undefined,
  className: '',
  dataQa: '',
  disabled: false,
  fill: colors.white,
  iconComponent: undefined,
  id: undefined,
  onClick: undefined,
  reverse: false,
  size: 'default',
  style: {},
  theme: 'default',
  title: '',
  type: 'button',
};

export default Button;
