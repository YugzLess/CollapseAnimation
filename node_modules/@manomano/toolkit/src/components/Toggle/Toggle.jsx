/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Toggle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { on: false };
  }

  componentDidMount() {
    this.ismounted = true;
    document.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    this.ismounted = false;
    document.removeEventListener('keydown', this.handleKey);
  }

  handleKey = e => {
    const { on } = this.state;
    if (this.ismounted) {
      const keys = {
        Escape: () => {
          e.preventDefault();
          if (on) {
            this.toggle();
          } else {
            e.stopPropagation();
          }
        },
      };
      if (keys[e.key]) keys[e.key]();
    }
  };

  toggle = () => this.setState(prevState => ({ on: !prevState.on }));

  toggleIn = () => this.setState({ on: true });

  toggleOut = () => this.setState({ on: false });

  render() {
    const { children } = this.props;
    const { on } = this.state;

    return children({
      on,
      toggle: this.toggle,
      toggleIn: this.toggleIn,
      toggleOut: this.toggleOut,
    });
  }
}

Toggle.displayName = 'Toggle';

Toggle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};
