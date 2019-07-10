/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Tab from '../Tab';
import Tabs from '../Tabs';

describe('Tabs', () => {
  const wrapper = shallow(
    <Tabs>
      <Tab label="Label">
        <p>Dizzle</p>
      </Tab>
    </Tabs>
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });
});
