/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const space = 16;
const requiredSpace = 200;


export const tooltipPosition = (element, position) => {
  const { top, left, right, bottom, width, height } = element;
  const leftSpace = left + width / 2 + window.scrollX;

  switch (true) {
    case window.innerHeight - bottom < requiredSpace:
    case position === 'top' && top > requiredSpace:
      return {
        class: 'top',
        style: {
          bottom: window.innerHeight - top + space,
          left: leftSpace,
        },
      };

    case window.innerWidth - right < requiredSpace:
    case position === 'left' && left > requiredSpace:
      return {
        class: 'left',
        style: {
          top: top + height / 2,
          right: document.body.clientWidth - left + window.scrollX + space,
        },
      };

    case left < requiredSpace:
    case position === 'right' && left > requiredSpace:
      return {
        class: 'right',
        style: {
          top: top + height / 2,
          left: right + space,
        },
      };

    case top < requiredSpace:
    case position === 'bottom':
      return {
        class: 'bottom',
        style: {
          top: bottom + space * 2,
          left: leftSpace,
        },
      };

    default:
      return {
        class: 'top',
        style: {
          bottom: window.innerHeight - top + space,
          left: leftSpace,
        },
      };
  }
};

export default tooltipPosition;
