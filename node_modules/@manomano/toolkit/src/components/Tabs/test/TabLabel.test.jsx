/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import TabLabel from '../TabLabel';

describe('TabLabel', () => {
  const onClickMock = jest.fn();
  const mockLabel = 'test';

  const wrapper = shallow(
    <TabLabel onClick={onClickMock} label={mockLabel} activeTab="test" />
  );

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('span click invoke onClick props', () => {
    wrapper.find('span').simulate('click');
    expect(onClickMock).toHaveBeenCalledWith(mockLabel);
  });
});
