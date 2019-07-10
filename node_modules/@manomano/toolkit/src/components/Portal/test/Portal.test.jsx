/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Portal from '../Portal';

describe('Portal', () => {
  let wrapper;
  const root = global.document.createElement('div');
  root.setAttribute('id', 'portalRoot');

  const body = global.document.querySelector('body');
  body.appendChild(root);

  const el = global.document.createElement('div');
  root.appendChild(el);

  beforeEach(() => {
    wrapper = shallow(
      <Portal>
        <div>children</div>
      </Portal>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render without crash', () => {
    expect(wrapper.length).toEqual(1);
  });
});
