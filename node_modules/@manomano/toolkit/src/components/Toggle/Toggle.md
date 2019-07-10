Toggle controler with RenderChild pattern :

<br />
<br />

| State to Props | Type    | Description                    |
| -------------- | ------- | ------------------------------ |
| on             | boolean | True or False...               |
| toggle         | func    | Action to set !== on           |
| toggleIn       | func    | Action to set on (force true)  |
| toggleOut      | func    | Action to set on (force false) |

<br />
###### Info: ToggleOut func is bind to escape keyboard.

```js
import Button from '../Button';
import Toggle from '../Toggle';

<Toggle>
  {({ on, toggle }) => (
    <div>
      <Button onClick={toggle}>{on ? 'Toggle On' : 'Toggle Off'}</Button>
      {on && (
        <div style={{ paddingTop: 16 }}>
          <h1>Title Toggle</h1>
        </div>
      )}
    </div>
  )}
</Toggle>;
```

Toggle force :

```js
import Card from '../Card';
import Toggle from '../Toggle';

<Toggle>
  {({ on, toggleIn, toggleOut }) => (
    <div onMouseEnter={toggleIn} onMouseLeave={toggleOut}>
      <Card>{on ? "I'm hovered" : 'Hover me'}</Card>
    </div>
  )}
</Toggle>;
```
