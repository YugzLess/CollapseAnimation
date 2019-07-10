/* eslint-disable jsx-a11y/label-has-for */
/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Icon from '../Icon';
import Check from '../Icon/Icons/IconCheck';
import styles from './InputCheck.module.scss';

/**
 * @visibleName Checkbox & Radio
 */
const InputCheck = ({
  checked,
  className,
  dataQa,
  disabled,
  id,
  itemId,
  label,
  name,
  onChange,
  required,
  type,
  value,
}) => {
  const classNames = cn(
    'toolkit',
    styles.inputCheck,
    { [styles.noLabel]: !label, [styles.required]: required },
    className
  );

  return (
    <div className={classNames}>
      <input
        aria-describedby={label}
        checked={checked}
        data-itemid={itemId}
        data-qa={dataQa}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        required={required}
        type={type}
        value={value}
      />
      <label htmlFor={id}>
        {label && label}
        {checked && type === 'checkbox' ? (
          <Icon component={Check} className={styles.icon} size="18" />
        ) : null}
      </label>
    </div>
  );
};

InputCheck.displayName = 'InputCheck';

InputCheck.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  dataQa: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  itemId: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  value: PropTypes.string.isRequired,
};

InputCheck.defaultProps = {
  checked: false,
  className: undefined,
  id: undefined,
  dataQa: '',
  disabled: false,
  itemId: '',
  label: '',
  required: false,
  onChange: () => {},
};

export default InputCheck;
