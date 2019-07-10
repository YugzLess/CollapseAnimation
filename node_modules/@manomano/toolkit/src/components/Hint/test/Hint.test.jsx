/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Hint from '../Hint';

describe('Hint', () => {
  const wrapper = shallow(<Hint textAlert="test" />);

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});
