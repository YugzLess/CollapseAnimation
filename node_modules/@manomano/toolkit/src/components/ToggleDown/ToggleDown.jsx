/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Spring, animated } from 'react-spring';
import cn from 'classnames';
import styles from './ToggleDown.module.scss';

const ToggleDown = ({ on, children, className, style }) => {
  const classNames = cn('toolkit', styles.toggleDown, className);

  return (
    <Spring
      force
      config={{
        tension: 300,
        friction: 17,
        mass: 0.2,
        precision: 1,
      }}
      from={{ height: 0 }}
      to={{ height: on ? 'auto' : 0 }}
    >
      {customStyle => (
        <animated.div
          className={classNames}
          style={{
            ...customStyle,
            ...style,
          }}
        >
          <div>{children}</div>
        </animated.div>
      )}
    </Spring>
  );
};

ToggleDown.displayName = 'ToggleDown';

ToggleDown.propTypes = {
  on: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ToggleDown.defaultProps = {
  className: '',
  style: {},
};

export default ToggleDown;
