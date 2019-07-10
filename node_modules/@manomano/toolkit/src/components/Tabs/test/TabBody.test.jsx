/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import TabBody from '../TabBody';
import Tab from '../Tab';

describe('TabBody', () => {
  it('should not render non active tabs', () => {
    const wrapper = shallow(
      <TabBody activeTab={undefined}>
        <Tab label="1">
          <h4>title</h4>
        </Tab>
        <Tab label="2">
          <h4>title</h4>
        </Tab>
      </TabBody>
    );

    expect(wrapper.length).toBe(0);
  });

  it('should only render the active tab', () => {
    const wrapper = shallow(
      <TabBody activeTab="2">
        <Tab label="1">
          <h4>tab1</h4>
        </Tab>
        <Tab label="2">
          <h4>tab2</h4>
        </Tab>
      </TabBody>
    );

    expect(wrapper.length).toBe(1);
  });
});
