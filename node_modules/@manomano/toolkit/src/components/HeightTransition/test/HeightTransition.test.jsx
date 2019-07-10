/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { mount } from 'enzyme';
import HeightTransition from '../HeightTransition';

describe('HeightTransition', () => {
  const wrapper = mount(
    <HeightTransition>
      <div>test</div>
    </HeightTransition>
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render animation height if props is on', () => {
    wrapper.setProps({ on: true });
    expect(wrapper.props().on).toBe(true);
  });
});
