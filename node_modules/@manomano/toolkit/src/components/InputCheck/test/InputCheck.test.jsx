/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import InputCheck from '../InputCheck';

describe('InputCheck', () => {
  const wrapper = shallow(
    <InputCheck type="radio" value="test" name="name" id="id" label="label" />
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a input', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should have its id attribute set correctly', () => {
    expect(wrapper.find('input').prop('id')).toEqual('id');
  });

  it('should render a label', () => {
    expect(wrapper.text()).toEqual('label');
  });

  it('should be checked at true', () => {
    wrapper.setProps({ checked: true, type: 'checkbox' });
    expect(wrapper.find('input').prop('checked')).toEqual(true);
  });
});
