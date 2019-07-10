/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Transition, animated } from 'react-spring';
import cn from 'classnames';
import StepIndicator from '../StepIndicator';
import Wrapper from '../Wrapper';
import styles from './Stepper.module.scss';
import { NOOP } from '../../helpers';

const bodyStepper = (children, activeStep, up) => {
  if (React.Children.count(children) === 1) return children;

  return (
    <Transition
      native
      unique
      reset
      config={{
        tension: 280,
        friction: 15,
        mass: 0.2,
        precision: 1,
      }}
      items={activeStep}
      from={{ translate: up ? 100 : -100 }}
      enter={{ translate: 0 }}
      leave={{ translate: up ? -100 : 100 }}
    >
      {// eslint-disable-next-line react/prop-types,react/display-name
      currentStep => ({ translate }) => (
        <animated.div
          className={styles.container}
          style={{
            // eslint-disable-next-line react/prop-types
            transform: translate.interpolate(t => `translate(${t}%, 0)`),
          }}
        >
          {children[currentStep]}
        </animated.div>
      )}
    </Transition>
  );
};

export default class Stepper extends PureComponent {
  componentDidMount() {
    const { getLength, children } = this.props;
    getLength(React.Children.count(children));
  }

  componentDidUpdate(prevProps) {
    const { getLength, children } = this.props;
    if (
      React.Children.count(prevProps.children) !==
      React.Children.count(children)
    ) {
      getLength(React.Children.count(children));
    }
  }

  render() {
    const { children, className, activeStep, direction } = this.props;

    const classNames = cn('toolkit', styles.stepper, className);

    const up = direction === 'up';

    return (
      <Wrapper className={classNames}>
        <StepIndicator activeStep={activeStep}>{children}</StepIndicator>

        <div className={styles.bodyStepper}>
          {bodyStepper(children, activeStep, up)}
        </div>
      </Wrapper>
    );
  }
}

Stepper.displayName = 'Stepper';

Stepper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.node,
    PropTypes.arrayOf([
      PropTypes.element,
      PropTypes.elementType,
      PropTypes.node,
    ]),
  ]).isRequired,
  activeStep: PropTypes.number,
  getLength: PropTypes.func,
  direction: PropTypes.oneOf(['up', 'down']),
};

Stepper.defaultProps = {
  className: '',
  activeStep: 0,
  getLength: NOOP,
  direction: 'up',
};
