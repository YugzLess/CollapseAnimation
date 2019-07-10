/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Iframe.module.scss';

const Iframe = ({ id, src, title, className, dataQa }) => {
  const classNames = cn('toolkit', styles.container, className);

  return (
    <div className={classNames} data-qa={dataQa}>
      <iframe
        id={id}
        title={title}
        className={styles.iframe}
        src={src}
        frameBorder="0"
      />
    </div>
  );
};

Iframe.displayName = 'Iframe';

Iframe.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  dataQa: PropTypes.string,
};

Iframe.defaultProps = {
  dataQa: '',
  className: undefined,
};

export default Iframe;
