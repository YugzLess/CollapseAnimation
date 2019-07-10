/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Transition, animated, interpolate } from 'react-spring';
import cn from 'classnames';

import Button from '../Button';
import Icon from '../Icon';
import IconClose from '../Icon/Icons/IconClose';
import Portal from '../Portal';
import Wrapper from '../Wrapper';
import styles from './Modal.module.scss';

const Modal = ({
  on,
  toggle,
  children,
  className,
  header,
  buttonTitle,
  noFooter,
  hasIframe,
  dataQa,
}) => {
  const classNames = cn(
    'toolkit',
    styles.content,
    {
      [styles.noFooter]: noFooter,
      [styles.iframe]: hasIframe,
    },
    className
  );

  const headerStyle = cn(styles.header, {
    [styles.hasContent]: !!header,
  });

  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (on) {
      document.body.style.overflow = 'hidden';
    }
    // eslint-disable-next-line no-return-assign
    return () => (document.body.style.overflow = originalStyle);
  }, [on]);

  return (
    <Portal>
      <Transition
        native
        config={{ tension: 350, friction: 23, mass: 0.6 }}
        items={on}
        from={{ o: 0, s: 0.75, y: '33vh' }}
        enter={{ o: 1, s: 1, y: '0' }}
        leave={{ o: 0, s: 0.75, y: '33vh' }}
      >
        {display =>
          display
            ? // eslint-disable-next-line react/prop-types,react/display-name
              ({ o, s, y }) => {
                return (
                  <animated.div
                    onClick={toggle}
                    className={styles.modal}
                    role="dialog"
                    style={{
                      // eslint-disable-next-line react/prop-types
                      opacity: o.interpolate(opacity => opacity),
                    }}
                  >
                    <animated.div
                      className={classNames}
                      onClick={e => e.stopPropagation()}
                      role="contentinfo"
                      style={{
                        transform: interpolate(
                          [s, y],
                          (scale, translateY) =>
                            `scale(${scale}) translate3d(0, ${translateY}, 0)`
                        ),
                      }}
                    >
                      <Wrapper className={headerStyle} data-qa={dataQa}>
                        <h4>{header}</h4>
                        <Icon
                          component={IconClose}
                          size="12"
                          onClick={toggle}
                          className={styles.icon}
                        />
                      </Wrapper>

                      <Wrapper className={styles.body}>{children}</Wrapper>

                      {!noFooter && (
                        <Wrapper className={styles.footer} direction="row">
                          <Button
                            title={buttonTitle}
                            onClick={toggle}
                            theme="secondary"
                          />
                        </Wrapper>
                      )}
                    </animated.div>
                  </animated.div>
                );
              }
            : () => null
        }
      </Transition>
    </Portal>
  );
};

Modal.dislayName = 'Modal';

Modal.propTypes = {
  on: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  header: PropTypes.node,
  buttonTitle: PropTypes.string,
  noFooter: PropTypes.bool,
  hasIframe: PropTypes.bool,
  dataQa: PropTypes.string,
};

Modal.defaultProps = {
  className: '',
  buttonTitle: 'close',
  noFooter: false,
  hasIframe: false,
  dataQa: '',
  header: undefined,
};

export default Modal;
