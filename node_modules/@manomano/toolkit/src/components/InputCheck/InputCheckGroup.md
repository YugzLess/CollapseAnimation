Input Radio Group Horizontal:

```js
initialState = {
  selected: 'mp3',
  options: [
    {
      label: 'Vinyle',
      value: 'vinyle',
    },
    {
      label: 'CD',
      value: 'cd',
    },
    {
      label: 'Mp3',
      value: 'mp3',
    },
  ],
};

<InputCheckGroup
  inputGroupTitle="this is Radio Group :"
  type="radio"
  options={state.options}
  id="michoi"
  name="radioGroupHorizontal"
  selectedOption={state.selected}
  onChange={e => setState({ selected: e.currentTarget.value })}
/>;
```

Input Radio Group Vertical:

```js
initialState = {
  selected: 'magneto',
  options: [
    {
      label: 'Cassette',
      value: 'cassette',
    },
    {
      label: 'Magneto',
      value: 'magneto',
    },
    {
      label: 'MiniDisc',
      value: 'minidisc',
    },
  ],
};

<InputCheckGroup
  inputGroupTitle="this is Radio Group :"
  type="radio"
  direction="vertical"
  options={state.options}
  name="radioGroupVertical"
  selectedOption={state.selected}
  onChange={e => setState({ selected: e.currentTarget.value })}
/>;
```

Input checkbox Group Vertical:

```js
initialState = {
  selected: ['osx-xxx_x', 'linux'],
  options: [
    {
      label: 'Osx',
      value: 'osx',
    },
    {
      label: 'Osx XXX',
      value: 'osx-xxx_x',
    },
    {
      label: 'Windows',
      value: 'windows',
    },
    {
      label: 'Linux',
      value: 'linux',
    },
  ],
};

<InputCheckGroup
  required
  error
  messageError="Display error message"
  inputGroupTitle="this is Checkbox Group :"
  type="checkbox"
  direction="horizontal"
  options={state.options}
  name="checkboxGroup"
  selectedOption={state.selected}
  onChange={e => {
    const isChecked = state.selected.indexOf(e.currentTarget.value) > -1;
    !isChecked
      ? setState({ selected: [...state.selected, e.currentTarget.value] })
      : setState({
          selected: state.selected.filter(
            option => option !== e.currentTarget.value
          ),
        });
  }}
/>;
```
