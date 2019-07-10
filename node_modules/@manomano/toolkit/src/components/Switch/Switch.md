Switch example:

```js
initialState = { checked: false };

<Switch
  id="id"
  name="name"
  value="id"
  checked={state.checked}
  onChange={() => setState({ checked: !state.checked })}
/>;
```

Switch with label:

```js
initialState = { checked: false };

<Switch
  label="switch label title"
  id="ids"
  name="withTitle"
  value="id"
  reset
  checked={state.checked}
  onChange={() => setState({ checked: !state.checked })}
/>;
```
