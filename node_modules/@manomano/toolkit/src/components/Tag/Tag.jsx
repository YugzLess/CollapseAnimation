/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable */
// TODO in https://manomano.atlassian.net/browse/REACT-242

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Tag.module.scss';

const Tag = ({ className, theme, children, disabled, dataQa, onClick }) => {
  const tagClass = cn(
    'toolkit',
    styles.tag,
    styles[theme],
    { [styles.disabled]: disabled, [styles.clickable]: !!onClick },
    className
  );

  return (
    <span className={tagClass} data-qa={dataQa} onClick={onClick}>
      {children}
    </span>
  );
};

Tag.displayName = 'Tag';

Tag.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'tertiary',
    'reset',
    'balata',
    'bellanotte',
    'playa',
    'artic',
    'hellblau',
    'purplerain',
    'kaktus',
  ]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  disabled: PropTypes.bool,
  dataQa: PropTypes.string,
  onClick: PropTypes.func,
};

Tag.defaultProps = {
  className: '',
  theme: 'default',
  dataQa: '',
  disabled: false,
};

export default Tag;
