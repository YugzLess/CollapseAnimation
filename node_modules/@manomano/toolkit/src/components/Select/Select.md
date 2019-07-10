Select playground:

```js
import Select from './Select';
initialState = {
  options: [
    { value: 'visa', label: 'Visa' },
    { value: 'master', label: 'MasterCard' },
    { value: 'amex', label: 'American Express' },
    { value: 'cash', label: 'Cash' },
    { value: 'other', label: 'Other' },
  ],
  value: '',
  status: 'blurred',
};

<div>
  <Select
    label="Payment method:"
    name="name"
    options={state.options}
    placeholder="---"
    className="myselect"
    onChange={event => setState({ value: event.target.value })}
    onBlur={event => setState({ status: 'blurred' })}
    onFocus={event => setState({ status: 'focused' })}
    value={state.value}
    required
  />
  <p style={{ marginTop: 24, marginBottom: 0, fontSize: 12, color: '#999' }}>
    Value: {state.value}
  </p>
  <p style={{ marginTop: 2, fontSize: 12, color: '#999' }}>
    Select is: {state.status}
  </p>
</div>;
```

Select with helper:

```js
import Select from './Select';
initialState = {
  options: [
    { value: 'apple', label: 'Apples' },
    { value: 'orange', label: 'Oranges' },
    { value: 'banana', label: 'Bananas' },
    { value: 'strawberry', label: 'Strawberries' },
  ],
  value: 'orange',
};

<Select
  label="Label"
  name="name"
  required
  options={state.options}
  helper="Helper text to display some information!"
  onChange={event => setState({ value: event.target.value })}
  value={state.value}
/>;
```

Select with error:

```js
import Select from './Select';
initialState = {
  options: [
    { value: 'beach', label: 'Beach' },
    { value: 'mountain', label: 'Mountain' },
    { value: 'jungle', label: 'Jungle' },
    { value: 'home', label: 'Home' },
  ],
  value: '',
};

<Select
  label="Vacationing at:"
  name="name"
  required
  options={state.options}
  placeholder="Choose your option"
  error="This is a required field"
  onChange={event => setState({ value: event.target.value })}
  value={state.value}
/>;
```

Select disabled:

```js
import Select from './Select';
initialState = {
  options: [
    { value: 'ocean', label: 'Ocean' },
    { value: 'mountain', label: 'Mountain' },
    { value: 'campagn', label: 'Campagn' },
  ],
  value: '',
};

<Select
  label="Label"
  name="name"
  options={state.options}
  placeholder="Choose your option"
  disabled
  onChange={event => setState({ value: event.target.value })}
  value={state.value}
/>;
```

Select with disabled option:

```js
import Select from './Select';
initialState = {
  options: [
    { value: 'ocean', label: 'Ocean' },
    { value: 'mountain', label: 'Mountain', disabled: true },
    { value: 'campagn', label: 'Campagn' },
  ],
  value: '',
};

<Select
  label="Label"
  name="name"
  options={state.options}
  placeholder="Choose your option"
  onChange={event => setState({ value: event.target.value })}
  value={state.value}
/>;
```

Select with small size:

```js
import Select from './Select';
initialState = {
  options: [
    { value: 'ocean', label: 'Ocean' },
    { value: 'mountain', label: 'Mountain' },
    { value: 'campagn', label: 'Campagn' },
  ],
  value: '',
};

<Select
  required
  label="Light Select"
  name="light"
  options={state.options}
  themeLight
  placeholder="Select with small size"
  onChange={event => setState({ value: event.target.value })}
  value={state.value}
/>;
```
