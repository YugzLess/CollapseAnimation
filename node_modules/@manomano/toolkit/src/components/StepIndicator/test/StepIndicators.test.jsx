/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import StepIndicator from '../StepIndicator';

describe('StepIndicator', () => {
  const wrapper = shallow(
    <StepIndicator activeStep={1}>
      <div step="1" label="One" />
      <div step="2" label="Two" />
      <div step="3" label="Three" />
    </StepIndicator>
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });
});
