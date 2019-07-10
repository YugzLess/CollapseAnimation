/**
 * Copyright (c) Colibri SAS - ManoMano
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { shallow } from 'enzyme';
import Select from '../Select';

describe('Select', () => {
  const options = [
    { value: 'visa', label: 'Visa' },
    { value: 'master', label: 'MasterCard' },
    { value: 'amex', label: 'American Express', disabled: true },
    { value: 'cash', label: 'Cash' },
    { value: 'other', label: 'Other' },
  ];

  it('should render correctly', () => {
    const wrapper = shallow(
      <Select
        label="This is a label"
        options={options}
        name="testName"
        id="testId"
        className="test-class"
        onChange={() => {}}
        value=""
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should not have a defaultValue, it makes the component not to update correctly to immidiate value changes after first render', () => {
    const wrapper = shallow(
      <Select options={options} onChange={() => {}} value="" />
    );

    expect(wrapper.find('select').prop('defaultValue')).toBe(undefined);
  });

  it('should render required elements', () => {
    const wrapper = shallow(
      <Select
        label="This is a label"
        options={options}
        required
        onChange={() => {}}
        value=""
      />
    );

    expect(wrapper.find('.label').text()).toBe('This is a label*');
    expect(wrapper.find('select').prop('required')).toBe(true);
  });

  it('should render disabled elements', () => {
    const wrapper = shallow(
      <Select options={options} disabled onChange={() => {}} value="" />
    );

    expect(wrapper.find('.select.disabled')).toHaveLength(1);
    expect(wrapper.find('select').prop('disabled')).toBe(true);
  });

  it('should render helper correctly', () => {
    const wrapper = shallow(
      <Select
        options={options}
        helper="This is a helper"
        onChange={() => {}}
        value=""
      />
    );

    expect(wrapper.find('span.message')).toHaveLength(1);
    expect(wrapper.find('span.helperMessage').text()).toBe('This is a helper');
  });

  it('should render error correctly', () => {
    const wrapper = shallow(
      <Select
        options={options}
        error="You have an error"
        onChange={() => {}}
        value=""
      />
    );

    expect(wrapper.find('.select.hasError')).toHaveLength(1);
    expect(wrapper.find('span.message')).toHaveLength(1);
    expect(wrapper.find('span.errorMessage').text()).toBe('You have an error');
  });

  it('should render themeLight', () => {
    const wrapper = shallow(
      <Select options={options} themeLight onChange={() => {}} value="" />
    );

    expect(wrapper.find('.select.light')).toHaveLength(1);
  });

  it('should render with placeholder', () => {
    const wrapper = shallow(
      <Select
        options={options}
        placeholder="Choose"
        onChange={() => {}}
        value=""
      />
    );

    expect(wrapper.find('option')).toHaveLength(6);
    expect(wrapper.find('option:first-child').text()).toBe('Choose');
    expect(wrapper.find('option:first-child').prop('value')).toBe('');
    expect(wrapper.find('.select.noOptionSelected')).toHaveLength(1);
  });

  it('should render extra selectProps correctly', () => {
    const wrapper = shallow(
      <Select
        options={options}
        autoComplete="cc-type"
        onChange={() => {}}
        value=""
      />
    );

    expect(wrapper.find('.control').prop('autoComplete')).toEqual('cc-type');
  });

  it('should change value when new value prop is passed', () => {
    const wrapper = shallow(
      <Select
        label="This is a label"
        options={options}
        required
        onChange={newValue => {
          wrapper.setProps({ value: newValue });
        }}
        value=""
      />
    );

    expect(wrapper.find('select').prop('value')).toBe('');
    wrapper.find('select').simulate('change', 'New Test Value');
    expect(wrapper.find('select').prop('value')).toBe('New Test Value');
  });
});
