Input Checkbox without label:

```js
initialState = { checked: false };

<InputCheck
  type="checkbox"
  value="noLabel"
  id="noLabel"
  name="exempleWithoutLabel"
  checked={state.checked}
  onChange={() => setState({ checked: !state.checked })}
/>;
```

Input Checkbox:

```js
initialState = { checked: false };

<InputCheck
  type="checkbox"
  label="Checkbox"
  value="value"
  id="value"
  name="exempleOne"
  checked={state.checked}
  onChange={() => setState({ checked: !state.checked })}
/>;
```

Input radio:

```js
initialState = { selected: 'valueRadioOne' };
onChange = e => setState({ selected: e.target.value });

<div style={{ display: 'flex' }}>
  <InputCheck
    type="radio"
    label="Choice Onetheroadagain"
    value="valueRadioOne"
    id="valueRadioOne"
    name="exempleTwo"
    checked={state.selected === 'valueRadioOne'}
    onChange={onChange}
  />
  <InputCheck
    type="radio"
    label="Choice Two"
    value="valueRadioTwo"
    id="valueRadioTwo"
    name="exempleTwo"
    checked={state.selected === 'valueRadioTwo'}
    onChange={onChange}
  />
</div>;
```
