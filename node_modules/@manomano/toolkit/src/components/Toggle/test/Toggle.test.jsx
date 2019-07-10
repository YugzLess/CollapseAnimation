/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { mount } from 'enzyme';
import Toggle from '../Toggle';

describe('Toggle', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Toggle>{() => <div>test</div>}</Toggle>);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });
});
