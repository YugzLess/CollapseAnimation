/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import InputCheck from './InputCheck';
import styles from './InputCheck.module.scss';

/**
 * @visibleName CheckBox & Radio Group
 */
const InputCheckGroup = ({
  className,
  direction,
  disabled,
  error,
  inputGroupTitle,
  name,
  onChange,
  options,
  required,
  selectedOption,
  touched,
  type,
}) => {
  const classNames = cn(
    'toolkit',
    styles.CheckGroup,
    styles[direction],
    className
  );

  const labelStyle = cn({
    [styles.required]: required,
  });

  return (
    <div className={classNames}>
      {inputGroupTitle && <span className={labelStyle}>{inputGroupTitle}</span>}
      {options &&
        options.map((option, index) => {
          const value = option.value ? option.value : option.label;
          return React.cloneElement(
            <InputCheck
              type={type}
              key={value}
              name={name}
              id={`${name}-${index}`}
              label={option.label}
              value={value}
              checked={
                type === 'radio'
                  ? selectedOption === value
                  : selectedOption.indexOf(value) > -1
              }
              disabled={disabled}
              onChange={onChange}
            />
          );
        })}
      {touched && error && error.length > 0 && (
        <span className={styles.error}>{error}</span>
      )}
    </div>
  );
};

InputCheckGroup.displayName = 'InputCheckGroup';

InputCheckGroup.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  disabled: PropTypes.bool,
  error: PropTypes.string,
  inputGroupTitle: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  required: PropTypes.bool,
  selectedOption: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  touched: PropTypes.bool,
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
};

InputCheckGroup.defaultProps = {
  className: '',
  direction: 'horizontal',
  disabled: false,
  error: '',
  inputGroupTitle: '',
  required: false,
  selectedOption: '',
  touched: true,
  onChange: null,
};

export default InputCheckGroup;
