Custom light dropDown :

- Remove arrow indicator with props icon (true by default).
- Change background color with props backgroundColor.
- Add disabled property on object to disabled some item option.
- Add props 'right' at true to changed alignement container options.

```js
import Layout from '../Layout';
import Toggle from '../Toggle';

initialState = {
  defaultValue: 'Default Value',
  currentValue: '',
  option: [
    {
      id: '0',
      value: 'option title 1',
      disabled: false,
    },
    {
      id: '1',
      value: 'option title 2 with extend title',
      disabled: false,
    },
    {
      id: '2',
      value: 'option title 3',
      disabled: false,
    },
    {
      id: '3',
      value: 'option title 4 with disabled set at true',
      disabled: true,
    },
    {
      id: '4',
      value: 'option title 5',
      disabled: false,
    },
  ],
};

<Layout direction="column" styleGuidist>
  <h4>Dropdown</h4>

  <Toggle>
    {({ on, toggle }) => (
      <Dropdown
        on={on}
        toggle={toggle}
        options={state.option}
        active={state.currentValue}
        title={
          state.currentValue !== '' ? state.currentValue : state.defaultValue
        }
        onClick={e => setState({ currentValue: e.currentTarget.dataset.value })}
      />
    )}
  </Toggle>
</Layout>;
```

```js
import Layout from '../Layout';
import Toggle from '../Toggle';

initialState = {
  defaultValue: 'Default Value',
  currentValue: '',
  option: [
    {
      id: '5',
      value: 'option title 5',
      disabled: false,
    },
    {
      id: '6',
      value: 'option title 6 with extend title',
      disabled: false,
    },
    {
      id: '7',
      value: 'option title 7',
      disabled: false,
    },
  ],
};

<Layout direction="column" styleGuidist>
  <h4>Dropdown with right options</h4>
  <Toggle>
    {({ on, toggle }) => (
      <Dropdown
        on={on}
        toggle={toggle}
        options={state.option}
        right
        icon={false}
        title="title"
        active={state.currentValue}
        onClick={e => setState({ currentValue: e.currentTarget.dataset.value })}
      />
    )}
  </Toggle>
</Layout>;
```

```js
import Layout from '../Layout';
import Toggle from '../Toggle';
import Icon from '../Icon';
import IconDotMenu from '../Icon/Icons/IconDotMenu';

initialState = {
  defaultValue: 'Default Value',
  currentValue: '',
  option: [
    {
      id: '8',
      value: 'option title 8',
      disabled: false,
    },
    {
      id: '9',
      value: 'option title 9 with extend title',
      disabled: false,
    },
    {
      id: '10',
      value: 'option title 10',
      disabled: false,
    },
  ],
};

<Layout direction="column" styleGuidist>
  <h4>Dropdown with sideLeft options</h4>
  <Toggle>
    {({ on, toggle }) => (
      <Dropdown
        on={on}
        toggle={toggle}
        options={state.option}
        sideLeft
        icon={false}
        active={state.currentValue}
        title={<Icon component={IconDotMenu} size="18" fill="#fff" />}
        onClick={e => setState({ currentValue: e.currentTarget.dataset.value })}
      />
    )}
  </Toggle>
</Layout>;
```

```js
import Layout from '../Layout';
import Toggle from '../Toggle';
import Icon from '../Icon';
import IconDotMenu from '../Icon/Icons/IconDotMenu';

initialState = {
  defaultValue: 'Default Value',
  currentValue: '',
  option: [
    {
      id: '11',
      value: 'option title 11',
      disabled: false,
    },
    {
      id: '12',
      value: 'option title 12 with extend title',
      disabled: false,
    },
    {
      id: '13',
      value: 'option title 13',
      disabled: false,
    },
  ],
};

<Layout direction="column" styleGuidist>
  <h4>Dropdown with sideRight options</h4>
  <Toggle>
    {({ on, toggle }) => (
      <Dropdown
        on={on}
        toggle={toggle}
        options={state.option}
        icon={false}
        sideRight
        backgroundColor="transparent"
        dark
        active={state.currentValue}
        title={<Icon component={IconDotMenu} size={18} fill="#000" />}
        onClick={e => setState({ currentValue: e.currentTarget.dataset.value })}
      />
    )}
  </Toggle>
</Layout>;
```
