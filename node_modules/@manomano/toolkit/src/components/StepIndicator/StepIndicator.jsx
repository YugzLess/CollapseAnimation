/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Step from './Step';
import styles from './StepIndicator.module.scss';

const StepIndicator = ({ children, className, activeStep }) => {
  const classNames = cn(
    styles.toolkit,
    styles.stepIndicatorContainer,
    className
  );
  return (
    <div className={classNames}>
      <div className={styles.content}>
        <div className={styles.line} />
        {Children.map(children, (child, index) => {
          const { step, label, done } = child.props;

          return (
            <Step
              key={step.toString()}
              step={step}
              label={label}
              active={activeStep === index}
              done={activeStep > index || done}
            />
          );
        })}
      </div>
    </div>
  );
};

StepIndicator.displayName = 'StepIndicator';

StepIndicator.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  activeStep: PropTypes.number,
};

StepIndicator.defaultProps = {
  className: '',
  activeStep: 0,
};

export default StepIndicator;
