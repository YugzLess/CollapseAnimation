/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import OptionContainer from '../OptionContainer';

describe('OptionContainer', () => {
  let wrapper;

  const props = {
    options: [
      {
        label: 'test',
        value: 'test',
      },
    ],
  };

  beforeEach(() => {
    wrapper = shallow(<OptionContainer {...props} on={false} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render container if props on is true', () => {
    // When
    wrapper = shallow(<OptionContainer {...props} on />);
    // then
    expect(wrapper.find('ul')).toHaveLength(1);
  });

  it('should render overlay if props on is true', () => {
    // When
    wrapper = shallow(<OptionContainer {...props} on />);
    // then
    expect(wrapper.find('.closeTarget')).toHaveLength(1);
  });
});
