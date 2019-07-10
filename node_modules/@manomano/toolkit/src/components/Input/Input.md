Input basic :

- Input is a controlled input.
- Check error or valid format with props error as boolean.
- Pass error message with props messageError.
- Pass helper message with props helper.
- Pass reset props at true to disabled icon and have a pure input light

Input basic

```js
initialState = { value: '' };

<Input
  label="Input text"
  type="text"
  id="id"
  name="name"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
/>;
```

Input with helper :

```js
initialState = { value: '' };

<Input
  label="Input text with helper"
  type="text"
  id="idHelper"
  name="name"
  helper="An helper to display some information!"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
/>;
```

Input with error :

```js
initialState = { value: '' };

<Input
  label="Input mail with error"
  type="email"
  id="withError"
  name="withError"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
  error="Error was found"
/>;
```

Input with set value :

```js
initialState = { value: 'I have set value' };

<Input
  label="Input with value"
  type="text"
  id="withValue"
  name="withValue"
  onChange={e => setState({ value: e.target.value })}
  value={state.value}
/>;
```

Input with helper and error :

```js
initialState = { value: '' };

<Input
  label="Input with helper and error"
  type="text"
  id="withHelperError"
  name="withHelperError"
  helper="An helper to display some information!"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
  error="Error was found"
/>;
```

Disabled Input :

```js
initialState = { value: '' };

<Input
  label="Disabled Input"
  type="text"
  id="disabled"
  name="disabled"
  value={state.value}
  disabled
/>;
```

Required Input :

```js
initialState = { value: '' };

<Input
  label="Input text Required"
  type="text"
  id="requiredId"
  name="RequiredName"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
  required
/>;
```

Validated Input :

```js
initialState = { value: 'Value is valid !' };

<Input
  label="Validated Input"
  type="text"
  id="Validated"
  name="Validated"
  valid
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
/>;
```

Input with icon :

```js
import IconLock from '../Icon/Icons/IconLock';
initialState = { value: '' };

<Input
  label="Input with icon"
  type="text"
  id="Icon"
  name="Icon"
  iconComponent={IconLock}
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
/>;
```

Input with indicator :

```js
initialState = { value: '' };

<Input
  label="Input with icon"
  type="text"
  id="IconOther"
  name="Icon"
  indicator="Indicator"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
/>;
```

Input with icon left :

```js
import IconLock from '../Icon/Icons/IconLock';
initialState = { value: '' };

<Input
  label="Input with icon"
  type="text"
  id="IconReverse"
  name="Icon reverse"
  iconComponent={IconLock}
  reverse
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
/>;
```

Input Light :

```jsx
import InputLight from './InputLight';
initialState = { value: '' };

<InputLight
  type="text"
  id="inputLight"
  name="inputLight"
  value={state.value}
  onChange={e => setState({ value: e.target.value })}
/>;
```
