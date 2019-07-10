/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { animated, Spring } from 'react-spring';
import { useMeasure } from '../GetMeasure';
import styles from './HeightTransition.module.scss';

const HeightTransition = ({ children }) => {
  const [size, ref] = useMeasure();
  return (
    <Spring
      native
      force
      config={{
        tension: 280,
        friction: 15,
        mass: 0.2,
        precision: 1,
      }}
      from={{ height: size.height }}
      to={{ height: 'auto' }}
    >
      {style => (
        <animated.div style={style} className={styles.wrapper}>
          <div ref={ref}>{children}</div>
        </animated.div>
      )}
    </Spring>
  );
};

HeightTransition.displayName = 'HeightTransition';
HeightTransition.propTypes = { children: PropTypes.element.isRequired };

export default HeightTransition;
