/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { animated, Transition } from 'react-spring';
import styles from './Overlay.module.scss';

const Overlay = ({ onClick, on, zIndex, backgroundColor }) => {
  const classNames = cn('toolkit', styles.overlay);

  return (
    <Transition
      native
      config={{ precision: 0.9 }}
      items={on}
      from={{ o: 0 }}
      enter={{ o: 0.5 }}
      leave={{ o: 0 }}
    >
      {display =>
        display &&
        // eslint-disable-next-line react/prop-types,react/display-name
        (({ o }) => (
          <animated.div
            className={classNames}
            onClick={onClick}
            style={{
              // eslint-disable-next-line react/prop-types
              opacity: o.interpolate(opacity => opacity),
              cursor: onClick && 'pointer',
              zIndex,
              backgroundColor,
            }}
          />
        ))
      }
    </Transition>
  );
};

Overlay.displayName = 'Overlay';

Overlay.propTypes = {
  onClick: PropTypes.func,
  on: PropTypes.bool.isRequired,
  zIndex: PropTypes.number,
  backgroundColor: PropTypes.string,
};

Overlay.defaultProps = {
  zIndex: 8000,
  backgroundColor: '#000',
  onClick: null,
};

export default Overlay;
