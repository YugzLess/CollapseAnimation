/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { animated, Transition } from 'react-spring';

const TabBody = ({ children, activeTab }) => {
  return React.Children.map(children, child => {
    const { label } = child.props;

    if (!Array.isArray(children)) return child.props.children;

    if (label !== activeTab) return undefined;

    return (
      <Transition
        native
        unique
        reset
        items
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {isOn =>
          isOn &&
          // eslint-disable-next-line react/prop-types,react/display-name
          (({ opacity }) => (
            <animated.div
              key={label}
              // eslint-disable-next-line no-shadow,react/prop-types
              style={{ opacity: opacity.interpolate(o => o) }}
            >
              {child.props.children}
            </animated.div>
          ))
        }
      </Transition>
    );
  });
};

TabBody.displayName = 'TabBody';

TabBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf([PropTypes.node]),
  ]).isRequired,
  activeTab: PropTypes.string,
};

export default TabBody;
