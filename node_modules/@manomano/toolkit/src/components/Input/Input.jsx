/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Icon from '../Icon';
import IconCheck from '../Icon/Icons/IconCheck';
import styles from './Input.module.scss';

const handleIcon = (iconComponent, valid, reset, touched) =>
  // eslint-disable-next-line no-nested-ternary
  valid && touched ? (
    <Icon component={IconCheck} size="22" className={styles.icon} />
  ) : iconComponent && !reset ? (
    <Icon component={iconComponent} size="16" className={styles.icon} />
  ) : null;

const handleIndicator = (indicator, iconComponent) =>
  indicator &&
  !iconComponent && <span className={styles.indicator}>{indicator}</span>;

const Input = React.forwardRef(
  (
    {
      autoComplete,
      autoCorrect,
      className,
      dataQa,
      disabled,
      error,
      helper,
      hidden,
      iconComponent,
      id,
      indicator,
      label,
      max,
      maxLength,
      min,
      minLength,
      name,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      required,
      reset,
      reverse,
      spellCheck,
      step,
      touched,
      type,
      valid,
      value,
    },
    ref
  ) => {
    const container = cn('toolkit', styles.container, className);

    const contentClass = cn(styles.content, {
      [styles.hasValue]: value !== '',
      [styles.hasSuccess]: valid,
      [styles.reverse]: reverse && iconComponent,
    });

    const labelStyle = cn({
      [styles.required]: required,
    });

    const inputStyle = cn({
      [styles.hasError]: touched && (error && error.length > 0),
      [styles.hasIndicator]: indicator,
    });

    return (
      <div className={container}>
        <div className={contentClass}>
          <input
            ref={ref}
            id={id}
            className={inputStyle}
            type={type}
            name={name}
            value={value}
            required={required}
            disabled={disabled}
            hidden={hidden}
            minLength={minLength}
            maxLength={maxLength}
            onChange={onChange}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            min={min}
            max={max}
            step={step}
            autoCorrect={autoCorrect}
            spellCheck={spellCheck}
            autoComplete={autoComplete}
            aria-required={required}
            aria-label={label && label}
            aria-hidden={type === 'hidden'}
            data-qa={dataQa}
          />
          {label && (
            // eslint-disable-next-line jsx-a11y/label-has-for
            <label htmlFor={id} className={labelStyle}>
              {label}
            </label>
          )}
          {handleIcon(iconComponent, valid, reset, touched)}
          {handleIndicator(indicator, iconComponent)}
        </div>
        {helper && <span className={styles.helper}>{helper}</span>}
        {touched && error && error.length > 0 && (
          <span className={styles.error}>{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

Input.propTypes = {
  autoComplete: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  autoCorrect: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  className: PropTypes.string,
  dataQa: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helper: PropTypes.string,
  hidden: PropTypes.bool,
  iconComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.bool,
  ]),
  id: PropTypes.string,
  indicator: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  label: PropTypes.string,
  max: PropTypes.number,
  maxLength: PropTypes.number,
  min: PropTypes.number,
  minLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  required: PropTypes.bool,
  reset: PropTypes.bool,
  reverse: PropTypes.bool,
  step: PropTypes.bool,
  touched: PropTypes.bool,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'number',
    'tel',
    'search',
    'hidden',
  ]).isRequired,
  valid: PropTypes.bool,
  value: PropTypes.string,
  spellCheck: PropTypes.bool,
};

Input.defaultProps = {
  autoComplete: undefined,
  autoCorrect: undefined,
  className: undefined,
  iconComponent: undefined,
  id: undefined,
  dataQa: '',
  disabled: false,
  error: '',
  helper: '',
  hidden: false,
  label: '',
  reverse: false,
  touched: true,
  valid: false,
  value: '',
  indicator: undefined,
  max: undefined,
  min: undefined,
  maxLength: undefined,
  minLength: undefined,
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  required: false,
  reset: false,
  step: undefined,
  spellCheck: false,
};

export default Input;
