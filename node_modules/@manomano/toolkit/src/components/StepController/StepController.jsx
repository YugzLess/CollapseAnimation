/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class StepController extends PureComponent {
  static defaultProps = { getActiveStep: undefined };

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      totalStep: undefined,
      direction: 'up',
      lastStep: false,
    };
  }

  componentDidMount() {
    const { getActiveStep } = this.props;
    if (getActiveStep) this.setActiveStep(getActiveStep);
  }

  setActiveStep = activeStep => this.setState({ activeStep });

  setTotalStep = totalStep => this.setState({ totalStep });

  prevStep = () => {
    const { totalStep } = this.state;

    this.setState(prevState => ({
      direction: 'down',
      activeStep: prevState.activeStep === 0 ? 0 : prevState.activeStep - 1,
      lastStep: prevState.activeStep !== totalStep - 1 && false,
    }));
  };

  nextStep = () => {
    const { totalStep } = this.state;

    this.setState(prevState => ({
      direction: 'up',
      activeStep:
        prevState.activeStep === totalStep - 1
          ? totalStep - 1
          : prevState.activeStep + 1,
      lastStep: prevState.activeStep === totalStep - 1 && true,
    }));
  };

  render() {
    const { children } = this.props;
    const { activeStep, direction, lastStep, totalStep } = this.state;

    return children({
      prevStep: this.prevStep,
      nextStep: this.nextStep,
      setTotalStep: this.setTotalStep,
      activeStep,
      direction,
      lastStep,
      totalStep,
    });
  }
}

StepController.displayName = 'StepController';

StepController.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  getActiveStep: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
};
