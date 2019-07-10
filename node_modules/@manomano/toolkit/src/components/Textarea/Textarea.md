```js
initialState = { value: '' };

<Textarea
  name="textarea"
  id="withLabel"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
  label="Label"
  helper="Helper data"
  required
/>;
```

```js
initialState = { value: '' };

<Textarea
  name="textarea"
  id="withLabel"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
  label="Label"
  error
  messageError="Invalid data"
/>;
```

```js
initialState = { value: '' };

<Textarea
  name="textarea"
  id="id"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
  placeholder="Placeholder"
/>;
```

```js
<Textarea name="textarea" id="id" placeholder="Disabled Placeholder" disabled />
```
