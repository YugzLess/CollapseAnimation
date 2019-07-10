/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Card.module.scss';

const Card = ({ children, className, dataQa }) => {
  const classNames = cn('toolkit', styles.card, className);

  return (
    <div className={classNames} data-qa={dataQa}>
      {children}
    </div>
  );
};

Card.displayName = 'Card';

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dataQa: PropTypes.string,
};

Card.defaultProps = {
  className: undefined,
  dataQa: undefined,
};

export default Card;
