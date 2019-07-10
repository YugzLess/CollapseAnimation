/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styles from './Portal.module.scss';

export default class Portal extends PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.setAttribute('class', styles.portal);
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

Portal.displayName = 'Portal';

Portal.propTypes = { children: PropTypes.element.isRequired };
