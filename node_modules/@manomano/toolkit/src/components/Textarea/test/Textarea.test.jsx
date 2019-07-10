/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Textarea from '../Textarea';

describe('Textarea', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Textarea name="name" placeholder="placeholder" />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Textarea element', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
  });

  it('should have no label', () => {
    expect(wrapper.find('label').length).toEqual(0);
  });

  it('should render label', () => {
    // when
    wrapper = shallow(
      <Textarea name="name" placeholder="placeholder" label="label" />
    );
    // then
    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('label').text()).toEqual('label');
  });

  it('should render an helper', () => {
    // when
    wrapper = shallow(
      <Textarea name="name" placeholder="placeholder" helper="helper" />
    );
    // then
    expect(wrapper.find('span').length).toEqual(1);
    expect(wrapper.find('span').text()).toEqual('helper');
  });

  it('should render an error', () => {
    // when
    wrapper = shallow(
      <Textarea
        name="name"
        placeholder="placeholder"
        error
        messageError="error"
      />
    );
    // then
    expect(wrapper.find('span').length).toEqual(1);
    expect(wrapper.find('span').text()).toEqual('error');
  });
});
