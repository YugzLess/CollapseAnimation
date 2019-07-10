/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../Sidebar';

describe('Sidebar', () => {
  const wrapper = shallow(
    <Sidebar width="300px" on>
      <p>Sidebar test</p>
    </Sidebar>
  );

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});
