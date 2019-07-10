/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Avatar.module.scss';

const Avatar = ({ className, src, alt, size, dataQa }) => {
  const classNames = cn('toolkit', styles.avatar, styles[size], className);

  return (
    <div role="img" aria-label="Avatar" className={classNames}>
      <svg viewBox="0 0 32.1 30.3">
        <defs>
          <clipPath id="maskAvatarSmall">
            <path d="M31.4,11.4L22.9,1c-0.6-0.7-1.6-1.1-2.5-1L7,2.2C6.1,2.3,5.3,3,5,3.8L0.2,16.3 C-0.2,17.2,0,18.2,0.6,19L9,29.3c0.6,0.7,1.6,1.1,2.5,0.9l13.3-2.1c0.9-0.1,1.7-0.8,2.1-1.7L31.8,14C32.2,13.1,32,12.1,31.4,11.4z" />
          </clipPath>
        </defs>
      </svg>

      <svg viewBox="0 0 48 45.4">
        <defs>
          <clipPath id="maskAvatarBig">
            <path d="M47.1,17L34.4,1.5C33.5,0.4,32-0.2,30.6,0L10.6,3.2C9.2,3.4,8,4.4,7.5,5.7 L0.3,24.4c-0.5,1.4-0.3,2.9,0.6,4l12.7,15.5c0.9,1.1,2.4,1.7,3.8,1.4l19.9-3.2c1.4-0.2,2.6-1.2,3.2-2.5L47.7,21 C48.3,19.6,48,18.1,47.1,17z" />
          </clipPath>
        </defs>
      </svg>

      <img src={src} alt={alt} data-qa={dataQa} />
    </div>
  );
};

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['big', 'small']),
  dataQa: PropTypes.string,
};

Avatar.defaultProps = {
  className: '',
  size: 'big',
  dataQa: '',
};

export default Avatar;
