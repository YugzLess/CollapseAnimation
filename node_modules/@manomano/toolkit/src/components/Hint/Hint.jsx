/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Icon from '../Icon';
import IconAlertCircle from '../Icon/Icons/IconAlertCircle';
import styles from './Hint.module.scss';

const Hint = ({
  theme,
  textAlert,
  iconComponent,
  iconWidth,
  className,
  dataQa,
}) => {
  const classNames = cn('toolkit', styles.hint, styles[theme], className);

  return (
    <div className={classNames} data-qa={dataQa}>
      <div className={styles.img}>
        <Icon component={iconComponent} size={iconWidth} />
      </div>
      <div>
        <p className="p">{textAlert}</p>
      </div>
    </div>
  );
};

Hint.displayName = 'Hint';

Hint.propTypes = {
  theme: PropTypes.oneOf(['default', 'light', 'danger', 'menthe']),
  textAlert: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.any,
  ]).isRequired,
  iconComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
  ]),
  iconWidth: PropTypes.number,
  className: PropTypes.string,
  dataQa: PropTypes.string,
};

Hint.defaultProps = {
  theme: 'default',
  iconComponent: IconAlertCircle,
  iconWidth: 32,
  className: '',
  dataQa: '',
};

export default Hint;
