/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../Button';
import Dropdown from '../Dropdown';
import Icon from '../../Icon';
import OptionContainer from '../OptionContainer';

describe('Dropdown', () => {
  const defaultProps = {
    options: [{ value: 'valueTest', label: 'labelTest', on: true }],
  };

  describe('template', () => {
    it('should match snapshot', () => {
      // When
      const wrapper = shallow(
        <Dropdown
          on
          title="titleTest"
          right
          disabled
          active="active"
          backgroundColor="#fff"
          className="my class name"
          sideLeft
          sideRight
          fill="#666"
          stroke="#555"
          dataQa="testQa"
          {...defaultProps}
        />
      );

      // Then
      expect(wrapper).toMatchSnapshot();
    });

    it('should match snapshot without default props', () => {
      // When
      const wrapper = shallow(<Dropdown {...defaultProps} />);

      // Then
      expect(wrapper).toMatchSnapshot();
    });

    it('should render no title and no icon when no props title and icon', () => {
      // When
      const wrapper = shallow(
        <Dropdown on={false} icon={false} {...defaultProps} />
      );

      // Then
      const button = wrapper.find(Button);
      expect(button.text()).toEqual('');
    });

    it('should render just an icon with no title', () => {
      // When
      const wrapper = shallow(<Dropdown on={false} {...defaultProps} />);

      // Then
      const icon = wrapper.find(Button).find(Icon);
      expect(icon).toHaveLength(1);
    });

    it('should render just title with no icon', () => {
      // When
      const wrapper = shallow(
        <Dropdown on={false} icon={false} title="titleTest" {...defaultProps} />
      );

      // Then
      const button = wrapper.find(Button);
      expect(button.text()).toEqual('titleTest');

      const icon = button.find(Icon);
      expect(icon).toHaveLength(0);
    });
  });

  describe('events', () => {
    describe('when button has been clicked', () => {
      it('should call toggle method', () => {
        // Given
        const onClickMock = jest.fn();
        const wrapper = shallow(
          <Dropdown on={false} toggle={onClickMock} {...defaultProps} />
        );
        const button = wrapper.find(Button);

        // When
        button.simulate('click');

        // Then
        expect(onClickMock).toHaveBeenCalledWith();
      });
    });

    describe('when option container has been clicked', () => {
      it('should call onClick method', () => {
        // Given
        const onClickMock = jest.fn();
        const wrapper = shallow(
          <Dropdown on={false} onClick={onClickMock} {...defaultProps} />
        );
        const optionContainer = wrapper.find(OptionContainer);

        // When
        optionContainer.simulate('click');

        // Then
        expect(onClickMock).toHaveBeenCalledWith();
      });
    });

    describe('when option container has been toggled', () => {
      it('should call toggle method', () => {
        // Given
        const toggleMock = jest.fn();
        const wrapper = shallow(
          <Dropdown on={false} toggle={toggleMock} {...defaultProps} />
        );

        const optionContainer = wrapper
          .find(OptionContainer)
          .dive()
          .find({ onClick: toggleMock });

        // When
        optionContainer.simulate('click');

        // Then
        expect(toggleMock).toHaveBeenCalledWith();
      });
    });
  });
});
