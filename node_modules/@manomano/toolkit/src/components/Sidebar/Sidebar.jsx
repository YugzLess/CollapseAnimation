/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Portal from '../Portal';
import styles from './Sidebar.module.scss';

const Sidebar = ({ on, children, className, position, width, dataQa }) => {
  const classNames = cn(
    'toolkit',
    styles.sidebar,
    {
      [styles.on]: on,
      [styles.left]: position === 'left',
      [styles.right]: position === 'right',
    },
    className
  );

  return (
    <Portal>
      <div className={classNames} style={{ width }} data-qa={dataQa}>
        {children}
      </div>
    </Portal>
  );
};

Sidebar.displayName = 'Sidebar';

Sidebar.propTypes = {
  on: PropTypes.bool.isRequired,
  width: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  position: PropTypes.oneOf(['right', 'left']),
  dataQa: PropTypes.string,
};

Sidebar.defaultProps = {
  className: '',
  position: 'left',
  dataQa: '',
};

export default Sidebar;
