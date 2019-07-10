/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable */
// TODO in https://manomano.atlassian.net/browse/REACT-241

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Textarea.module.scss';

const Textarea = ({
  placeholder,
  label,
  id,
  name,
  value,
  cols,
  rows,
  required,
  disabled,
  form,
  onChange,
  className,
  dataQa,
  error,
  messageError,
  valid,
  helper,
}) => {
  const container = cn('toolkit', styles.container, className);

  const content = cn(styles.content, {
    [styles.hasValue]: value !== '',
    [styles.hasSuccess]: valid,
  });

  const textarea = cn(styles.textarea, { [styles.hasError]: error });

  const labelCn = cn({
    [styles.required]: required,
  });

  return (
    <div className={container}>
      <div className={content}>
        <textarea
          id={id}
          className={textarea}
          placeholder={placeholder}
          name={name}
          value={value}
          cols={cols}
          rows={rows}
          required={required}
          disabled={disabled}
          form={form}
          onChange={onChange}
          aria-multiline="true"
          aria-required={required}
          data-qa={dataQa}
        />
        {label && (
          <label htmlFor={id} className={labelCn}>
            {label}
          </label>
        )}
      </div>
      {helper && <span className={styles.helper}>{helper}</span>}
      {error && <span className={styles.error}>{messageError}</span>}
    </div>
  );
};

Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  cols: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.any,
  ]),
  rows: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.any,
  ]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  form: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  dataQa: PropTypes.string,
};

Textarea.defaultProps = {
  placeholder: '',
  label: '',
  id: '',
  value: '',
  cols: '20',
  rows: '5',
  required: false,
  disabled: false,
  form: '',
  className: '',
  dataQa: '',
  valid: false,
  error: false,
  messageError: '',
  helper: '',
};

export default Textarea;
