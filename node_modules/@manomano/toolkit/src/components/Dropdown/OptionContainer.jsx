/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ToggleDown from '../ToggleDown';
import styles from './Dropdown.module.scss';

/**
 * @visibleName Dropdown
 */
const OptionContainer = ({
  on,
  toggle,
  size,
  options,
  right,
  className,
  onClick,
  active,
  sideLeft,
  sideRight,
}) => {
  const container = cn(styles.container, {
    [styles.show]: on,
    [styles.right]: right,
    [styles.sideLeft]: sideLeft,
    [styles.sideRight]: sideRight,
  });

  const itemOption = item =>
    cn(
      'li',
      className,
      { [styles.disabled]: item.disabled },
      { [styles.active]: (item.value || item.id) === active }
    );

  const list = cn('ul', styles.list);

  const space = 8;

  const setPosition = {
    top: size && !sideLeft && !sideRight && `${size.height + space}px`,
    right: size && sideLeft && !sideRight && `${size.width + space}px`,
    left: size && sideRight && `${size.width + space}px`,
  };

  return (
    <>
      {// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      on && <div className={styles.closeTarget} onClick={toggle} />}
      <ToggleDown on={on} className={container} style={setPosition}>
        <ul className={list}>
          {options.map((item, index) => {
            const key = item.id ? item.id.toString() : index;
            return (
              <li
                key={key}
                className={itemOption(item)}
                data-id={item.id}
                data-value={item.value}
                disabled={item.disabled}
                onClick={!item.disabled ? onClick : null}
                onKeyPress={null}
              >
                <span
                  onClick={!item.disabled ? toggle : null}
                  onKeyPress={null}
                  key={key}
                >
                  {item.value}
                </span>
              </li>
            );
          })}
        </ul>
      </ToggleDown>
    </>
  );
};

OptionContainer.propTypes = {
  on: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  toggle: PropTypes.func,
  right: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  active: PropTypes.string,
  sideLeft: PropTypes.bool,
  sideRight: PropTypes.bool,
  size: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
};

OptionContainer.defaultProps = {
  toggle: null,
  onClick: null,
  right: false,
  className: '',
  active: '',
  sideLeft: false,
  sideRight: false,
};

export default OptionContainer;
