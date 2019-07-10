/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../Logo';

describe('Logo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render mini logo', () => {
    wrapper.setProps({ mini: true });
  });

  it('should have special class for theme if props is define', () => {
    wrapper.setProps({ theme: 'colorWhite' });
    expect(wrapper.hasClass('colorWhite')).toEqual(true);
  });
});
