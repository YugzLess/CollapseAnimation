/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { mount } from 'enzyme';
import Overlay from '../Overlay';

describe('Overlay', () => {
  let wrapper;

  const props = {
    zIndex: 8000,
    backgroundColor: '#000',
    onClick: jest.fn(),
  };

  wrapper = mount(<Overlay on={false} {...props} />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render overlay if on is true', () => {
    wrapper.setProps({ on: true });
    expect(wrapper.props().on).toBe(true);
  });

  it('should have pointer cursor if component has props onClick', () => {
    wrapper = mount(<Overlay on {...props} />);
    expect(wrapper.find('div').prop('style')).toHaveProperty(
      'cursor',
      'pointer'
    );
  });
});
