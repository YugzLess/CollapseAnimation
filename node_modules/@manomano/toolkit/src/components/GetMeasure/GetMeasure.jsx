/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import useMeasure from './hook';

const GetMeasure = ({ children }) => {
  const [size, ref] = useMeasure();

  return children({ size, ref });
};

GetMeasure.displayName = 'GetMeasure';

GetMeasure.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

export default GetMeasure;
