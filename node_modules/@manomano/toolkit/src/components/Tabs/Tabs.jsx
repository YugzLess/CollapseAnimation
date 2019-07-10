/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import HeightTransition from '../HeightTransition';
import TabBody from './TabBody';
import TabLabel from './TabLabel';
import Wrapper from '../Wrapper';
import styles from './Tabs.module.scss';

export default class Tabs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { activeTab: undefined };
  }

  componentDidMount() {
    const { children } = this.props;

    if (React.Children.count(children) > 1) {
      React.Children.map(children, child =>
        child.props.isDefaultActive
          ? this.onClickTabItem(child.props.label)
          : this.onClickTabItem(children[0].props.label)
      );
    }
  }

  componentDidUpdate(prevProps) {
    const { children } = this.props;
    if (
      React.Children.count(prevProps.children) !==
      React.Children.count(children)
    ) {
      React.Children.map(children, child =>
        child.props.isDefaultActive
          ? this.onClickTabItem(child.props.label)
          : this.onClickTabItem(children[0].props.label)
      );
    }
  }

  onClickTabItem = labelTab => this.setState({ activeTab: labelTab });

  render() {
    const { children, className } = this.props;
    const { activeTab } = this.state;

    const classNames = cn('toolkit', styles.tabs, className);

    return (
      <Wrapper className={classNames}>
        <ul className={styles.tabList} role="tablist">
          {React.Children.map(children, child => {
            const { label } = child.props;
            return React.cloneElement(
              <TabLabel
                activeTab={activeTab}
                label={label}
                onClick={this.onClickTabItem}
                key={label}
              />
            );
          })}
        </ul>
        <HeightTransition>
          <div className={styles.tabContent}>
            <TabBody activeTab={activeTab}>{children}</TabBody>
          </div>
        </HeightTransition>
      </Wrapper>
    );
  }
}

Tabs.displayName = 'Tabs';

Tabs.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf([PropTypes.node]),
  ]).isRequired,
};

Tabs.defaultProps = { className: '' };
