/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';

const fs = require('fs');
const path = require('path');

describe('Icons', () => {
  const iconsDir = path.join(__dirname, '..');

  const files = fs.readdirSync(iconsDir);

  files
    .filter(filename => filename.includes('.jsx'))
    .forEach(icon => {
      const iconName = icon.split('.')[0];

      it(`${iconName} should match snapshot`, () => {
        // eslint-disable-next-line import/no-dynamic-require,global-require
        const Component = require(path.join(iconsDir, icon)).default;
        const wrapper = shallow(<Component />);

        expect(wrapper).toMatchSnapshot();
      });
    });
});
