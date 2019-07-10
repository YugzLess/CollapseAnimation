/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import cn from 'classnames';
import defaultStyles from 'react-table/react-table.css';
import './Table.scss';

const Table = ({ className, columns, data, defaultPageSize, loading }) => {
  const classNames = cn(
    'toolkit',
    defaultStyles,
    className,
    'table',
    '-striped',
    '-highlight'
  );

  return (
    <ReactTable
      className={classNames}
      columns={columns}
      data={data}
      defaultPageSize={defaultPageSize}
      loading={loading}
    />
  );
};

Table.displayName = 'Table';

Table.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape()),
  data: PropTypes.arrayOf(PropTypes.shape()),
  defaultPageSize: PropTypes.number,
  loading: PropTypes.bool,
};

Table.defaultProps = {
  className: '',
  columns: [],
  data: [],
  defaultPageSize: 10,
  loading: false,
};

export default Table;
