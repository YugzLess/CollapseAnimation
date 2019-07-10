/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../Layout';

describe('Layout', () => {
  const wrapper = shallow(
    <Layout>
      <h1>children</h1>
    </Layout>
  );

  it('should render without crash with layoutContainer', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render a children', () => {
    expect(wrapper.text()).toEqual('children');
  });
});
