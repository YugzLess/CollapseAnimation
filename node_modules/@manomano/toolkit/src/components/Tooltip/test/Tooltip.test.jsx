/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { mount } from 'enzyme';
import Tooltip from '../Tooltip';

describe('Tooltip', () => {
  const wrapper = mount(<Tooltip content="test">test</Tooltip>);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render content', () => {
    expect(wrapper.props().content).toEqual('test');
  });

  it('should display tooltip', () => {
    wrapper.setProps({ on: true });
    expect(wrapper.props().on).toBe(true);
  });
});
