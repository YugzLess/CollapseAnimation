/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Wrapper.module.scss';

/**
 * @visibleName Wrapper/Header/Footer
 */
const Wrapper = ({ children, className, direction, type, style, dataQa }) => {
  const classNames = cn(
    'toolkit',
    styles.wrapper,
    {
      [styles.row]: direction === 'row',
      [styles.column]: direction === 'column',
    },
    className
  );

  return React.createElement(
    type,
    {
      className: classNames,
      type,
      direction,
      style,
      'data-qa': dataQa,
    },
    children
  );
};

Wrapper.displayName = 'Wrapper';

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.node,
    PropTypes.arrayOf([
      PropTypes.element,
      PropTypes.elementType,
      PropTypes.node,
    ]),
  ]).isRequired,
  className: PropTypes.string,
  direction: PropTypes.string,
  style: PropTypes.shape({}),
  type: PropTypes.oneOf(['div', 'header', 'footer', 'section']),
  dataQa: PropTypes.string,
};

Wrapper.defaultProps = {
  className: '',
  direction: 'column',
  type: 'div',
  dataQa: '',
  style: {},
};

export default Wrapper;
