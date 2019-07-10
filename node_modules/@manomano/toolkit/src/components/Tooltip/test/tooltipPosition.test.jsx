/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import tooltipPosition from '../tooltipPosition';

describe('tooltipPosition', () => {
  let oldWindowScrollX;
  let oldWindowInnerHeight;
  let oldDocument;

  beforeEach(() => {
    oldWindowScrollX = window.scrollX;
    oldWindowInnerHeight = window.innerHeight;
    oldDocument = document;
  });

  afterEach(() => {
    window.scrollX = oldWindowScrollX;
    window.innerHeight = oldWindowInnerHeight;
    // eslint-disable-next-line no-global-assign
    document = { body: { clientWidth: oldDocument } };
  });

  const dummyElement = (top, right, bottom, left) => {
    return {
      top,
      bottom: top + 20,
      left,
      right: left + 100,
      width: 100,
      height: 20,
    };
  };

  it('should return top position when window.innerHeight is less than bottom smaller than requiredSpace', () => {
    window.scrollX = 0;
    window.innerHeight = 1080;
    const element = dummyElement(900, 1436, 0, 500);
    const position = 'right';

    const returnedPosition = tooltipPosition(element, position);

    expect(returnedPosition).toEqual({
      class: 'top',
      style: {
        bottom: 196,
        left: 550,
      },
    });
  });

  it('should return top position with bottom left style when position is top', () => {
    window.scrollX = 0;
    window.innerHeight = 1080;
    const element = dummyElement(700, 0, 396, 500);
    const position = 'top';

    const returnedPosition = tooltipPosition(element, position);

    expect(returnedPosition).toEqual({
      class: 'top',
      style: {
        bottom: 396,
        left: 550,
      },
    });
  });

  it('should return left position when window.innerWidth is less than right smaller than requiredSpace', () => {
    window.scrollX = 0;
    window.innerWidth = 1920;
    // eslint-disable-next-line no-global-assign
    document = 1920;

    const element = dummyElement(500, 10, 0, 1820);
    const position = 'right';

    const returnedPosition = tooltipPosition(element, position);

    expect(returnedPosition).toEqual({
      class: 'left',
      style: {
        top: 510,
        right: -1804,
      },
    });
  });

  it('should return left position with top & right style when position is left', () => {
    window.scrollX = 0;
    window.innerWidth = 1920;
    // eslint-disable-next-line no-global-assign
    document = 1920;

    const element = dummyElement(500, 0, 0, 500);
    const position = 'left';

    const returnedPosition = tooltipPosition(element, position);

    expect(returnedPosition).toEqual({
      class: 'left',
      style: {
        top: 510,
        right: -484,
      },
    });
  });

  it('should return right position if left is less than required space', () => {
    const element = dummyElement(500, 0, 0, 50);
    const position = 'left';

    const returnedPosition = tooltipPosition(element, position);

    expect(returnedPosition).toEqual({
      class: 'right',
      style: {
        top: 510,
        left: 166,
      },
    });
  });

  it('should return right position with top and left style when position is right', () => {
    const element = dummyElement(500, 500, 0, 50);
    const position = 'right';

    const returnedPosition = tooltipPosition(element, position);

    expect(returnedPosition).toEqual({
      class: 'right',
      style: {
        top: 510,
        left: 166,
      },
    });
  });

  it('should return bottom position if top is less than required space', () => {
    const element = dummyElement(10, 200, 0, 500);
    const position = 'top';

    const returnedPosition = tooltipPosition(element, position);

    expect(returnedPosition).toEqual({
      class: 'bottom',
      style: {
        top: 62,
        left: 550,
      },
    });
  });

  it('should return bottom position with top and left style when position is bottom', () => {
    const element = dummyElement(10, 200, 0, 500);
    const position = 'bottom';

    const returnedPosition = tooltipPosition(element, position);

    expect(returnedPosition).toEqual({
      class: 'bottom',
      style: {
        top: 62,
        left: 550,
      },
    });
  });

  it('should return top position by default', () => {
    const element = dummyElement(700, 0, 396, 500);
    const returnedPosition = tooltipPosition(element, undefined);

    expect(returnedPosition).toEqual({
      class: 'top',
      style: {
        bottom: 84,
        left: 550,
      },
    });
  });
});
