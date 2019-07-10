/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Tab from '../Tab';

describe('Tab', () => {
  it('should match default snapshot', () => {
    const wrapper = shallow(<Tab label="label" isActiveTab />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match children snapshot', () => {
    const wrapper = shallow(
      <Tab label="label">
        <span>This is a children</span>
      </Tab>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
