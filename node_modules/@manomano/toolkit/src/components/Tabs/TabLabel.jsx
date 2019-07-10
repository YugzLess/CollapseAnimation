/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable */
// TODO in https://manomano.atlassian.net/browse/REACT-243

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Tabs.module.scss';

const TabLabel = ({ activeTab, className, label, onClick }) => {
  const handleClick = () => {
    onClick(label);
  };

  const classNames = cn('toolkit', className, {
    [styles.active]: activeTab === label,
  });

  return (
    <li
      className={styles.tabLabel}
      aria-selected={activeTab === label}
      role="tab"
    >
      <span className={classNames} onClick={handleClick}>
        {label}
      </span>
    </li>
  );
};

TabLabel.displayName = 'TabLabel';

TabLabel.propTypes = {
  label: PropTypes.node.isRequired,
  activeTab: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

TabLabel.defaultProps = {
  className: '',
  activeTab: '',
};

export default TabLabel;
