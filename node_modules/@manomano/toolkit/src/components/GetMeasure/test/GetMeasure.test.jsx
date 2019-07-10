/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { shallow } from 'enzyme';
import GetMeasure from '../GetMeasure';

jest.mock('../hook', () => {
  return () => [{ height: 300, width: 8000 }, { current: null }];
});

describe('GetMeasure', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<GetMeasure>{({ size }) => size}</GetMeasure>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass proper props to children', async () => {
    const children = jest.fn(({ ref }) => <div ref={ref}>Dumb component</div>);

    shallow(<GetMeasure>{children}</GetMeasure>);

    expect(children).toHaveBeenCalledWith({
      size: { width: 8000, height: 300 },
      ref: { current: null },
    });
  });
});
