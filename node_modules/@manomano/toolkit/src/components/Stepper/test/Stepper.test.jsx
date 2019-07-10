/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Stepper from '../Stepper';

describe('Stepper', () => {
  const wrapper = shallow(
    <Stepper direction="up">
      <div step="1" label="One">
        <h4>step 1 container</h4>
        <p>This is step One container</p>
      </div>
      <div step="2" label="Two">
        <h4>step 2 container</h4>
        <p>This is step Two container</p>
      </div>
    </Stepper>
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a step', () => {
    const toggle = jest.fn();
    wrapper.setProps({ on: true, toggle });
  });

  it('should control step', () => {
    const action = jest.fn();
    wrapper.setProps({
      prevState: action,
      nextStep: action,
      activeStep: 1,
      setTotalStep: action,
      direction: 'down',
      lastStep: action,
      totalStep: 4,
    });
  });
});
