/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../Wrapper';

describe('Wrapper', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Wrapper>
        <h1>children</h1>
      </Wrapper>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
