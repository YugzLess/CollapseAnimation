/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Tag from '../Tag';

describe('Tag', () => {
  const wrapper = shallow(
    <Tag>
      <p>Tag</p>
    </Tag>
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a children as string', () => {
    expect(wrapper.find('p').text()).toEqual('Tag');
  });

  it('should have className disabled if props is true', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.hasClass('disabled')).toEqual(true);
  });
});
