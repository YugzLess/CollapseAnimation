/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Switch.module.scss';

const Switch = ({
  name,
  id,
  checked,
  onChange,
  className,
  dataQa,
  label,
  reset,
  itemId,
}) => {
  const container = cn(
    'toolkit',
    styles.container,
    { [styles.reset]: reset },
    className
  );

  const labelClass = cn(styles.label, {
    [styles.active]: checked,
  });

  return (
    <div className={container}>
      <label htmlFor={id} className={labelClass}>
        <input
          className={styles.switch}
          type="checkbox"
          id={id}
          name={name}
          value={id}
          data-itemid={itemId}
          checked={checked}
          onChange={onChange}
          data-qa={dataQa}
          aria-checked={checked}
          aria-describedby={id}
        />
      </label>
      {label && (
        // eslint-disable-next-line jsx-a11y/label-has-for
        <label htmlFor={id} className={styles.title}>
          {label}
        </label>
      )}
    </div>
  );
};

Switch.displayName = 'Switch';

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  itemId: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  dataQa: PropTypes.string,
  label: PropTypes.string,
  reset: PropTypes.bool,
};

Switch.defaultProps = {
  itemId: '',
  className: '',
  dataQa: '',
  label: '',
  reset: false,
};

export default Switch;
