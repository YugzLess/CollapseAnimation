/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable */
// TODO in https://manomano.atlassian.net/browse/REACT-240

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Transition, animated } from 'react-spring';
import cn from 'classnames';

import Portal from '../Portal';
import Toggle from '../Toggle';
import tooltipPosition from './tooltipPosition';

import styles from './Tooltip.module.scss';

let addTooltipPosition = {};

const renderTooltip = (display, content, bgColor) => {
  return (
    <Portal>
      <Transition
        native
        unique
        config={{ tension: 350, friction: 23, mass: 0.6, precision: 0.1 }}
        items={display}
        from={{ o: 0, s: 0.6 }}
        enter={{ o: 1, s: 1 }}
        leave={{ o: 0, s: 0.6 }}
      >
        {displayTooltip =>
          displayTooltip
            ? // eslint-disable-next-line react/prop-types,react/display-name
              ({ o, s }) => (
                <div
                  className={styles.tooltip}
                  style={addTooltipPosition.style}
                >
                  <div className={styles[addTooltipPosition.class]}>
                    <animated.div
                      style={{
                        opacity: o.interpolate(opacity => opacity),
                        transform: s.interpolate(scale => `scale(${scale})`),
                        backgroundColor: bgColor,
                        color: '#fff',
                      }}
                    >
                      <div className={styles.svg}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 18.39 7.96"
                          width="16"
                          height="16"
                        >
                          <path
                            d="M18.39,0,11.31,7.08a3,3,0,0,1-4.23,0L0,0Z"
                            fill={bgColor}
                          />
                        </svg>
                      </div>
                      <div className={styles.content}>
                        <span className={styles.spanContent}>{content}</span>
                      </div>
                    </animated.div>
                  </div>
                </div>
              )
            : () => null
        }
      </Transition>
    </Portal>
  );
};

export default class Tooltip extends PureComponent {
  constructor(props) {
    super(props);
    this.transmitter = React.createRef();
  }

  handleMouseEnter = (e, toggleIn) => {
    const { position } = this.props;
    if (this.transmitter.current) {
      addTooltipPosition = tooltipPosition(
        this.transmitter.current.getBoundingClientRect(),
        position
      );
    }
    toggleIn();
  };

  render() {
    const { children, className, dataQa, content, bgColor } = this.props;

    const classNames = cn('toolkit', styles.transmitter, className);

    return (
      <Toggle>
        {({ on, toggleIn, toggleOut }) => (
          <>
            <span
              className={classNames}
              onMouseEnter={e => this.handleMouseEnter(e, toggleIn)}
              onMouseLeave={toggleOut}
              onWheel={toggleOut}
              ref={this.transmitter}
              role="button"
              data-qa={dataQa}
            >
              {children}
            </span>
            {renderTooltip(on, content, bgColor)}
          </>
        )}
      </Toggle>
    );
  }
}

Tooltip.displayName = 'Tooltip';

Tooltip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  className: PropTypes.string,
  bgColor: PropTypes.string,
  dataQa: PropTypes.string,
};

Tooltip.defaultProps = {
  position: 'top',
  className: '',
  bgColor: '#0c193a',
  dataQa: '',
};
