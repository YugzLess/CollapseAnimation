/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import useMeasure from '../hook';

jest.mock('resize-observer-polyfill', () => ({
  __esModule: true, // this property makes it work
  default: class ResizeObserver {
    constructor(cb) {
      this.cb = cb;
    }

    observe(element) {
      this.cb([
        {
          target: {
            getBoundingClientRect() {
              return {
                width: parseInt(element.style.width, 10),
                height: parseInt(element.style.height, 10),
              };
            },
          },
        },
      ]);
    }

    // eslint-disable-next-line class-methods-use-this
    unobserve() {}
  },
}));

describe('useMeasure', () => {
  it('should set init value', () => {
    let expectedSize;
    let expectedRef;
    function App() {
      const [size, ref] = useMeasure();
      expectedSize = size;
      expectedRef = ref;
      return <div />;
    }

    shallow(<App />);

    expect(expectedSize).toEqual({
      x: 0,
      y: 0,
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
    });
    expect(expectedRef).toEqual(React.createRef());
  });

  it('should calculate size properly', () => {
    let expectedSize;
    // eslint-disable-next-line react/prop-types
    function App({ expectedWidth, expectedHeight }) {
      const [size, ref] = useMeasure();
      expectedSize = size;
      return (
        <div
          style={{ height: expectedHeight, width: expectedWidth }}
          ref={ref}
        />
      );
    }

    mount(<App expectedHeight={100} expectedWidth={200} />);

    expect(expectedSize).toEqual({
      width: 200,
      height: 100,
    });
  });
});
