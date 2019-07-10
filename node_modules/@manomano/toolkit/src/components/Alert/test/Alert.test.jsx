/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Alert, { translate } from '../Alert';

describe('Alert', () => {
  let wrapper;
  const toggle = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Alert on={false} toggle={toggle} textAlert="test" theme="danger" />
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render alert if props on is true', () => {
    wrapper = mount(<Alert on textAlert="test" toggle={toggle} />);
    expect(wrapper.props().on).toBe(true);
  });

  it('should render timeout close function if props timeout is declared', () => {
    wrapper = mount(
      <Alert on timeout={300} textAlert="test" toggle={toggle} />
    );
    expect(wrapper.props().timeout).toEqual(300);
  });

  it('should set position on bottom right if position is changed', () => {
    wrapper = mount(
      <Alert on position="bottomRight" textAlert="test" toggle={toggle} />
    );
    expect(wrapper.props().position).toEqual('bottomRight');
  });

  it('should set position on top left if position is changed', () => {
    wrapper = mount(
      <Alert on position="topLeft" textAlert="test" toggle={toggle} />
    );
    expect(wrapper.props().position).toEqual('topLeft');
  });

  it('should set position on bottom left if position is changed', () => {
    wrapper = mount(
      <Alert on position="bottomLeft" textAlert="test" toggle={toggle} />
    );
    expect(wrapper.props().position).toEqual('bottomLeft');
  });

  it('should display with toggle', () => {
    wrapper = mount(<Alert on textAlert="test" toggle={toggle} />);
    expect(wrapper.props().toggle).toEqual(toggle);
  });

  test('translate', () => {
    expect(translate('default')).toBe(320);
  });
});
