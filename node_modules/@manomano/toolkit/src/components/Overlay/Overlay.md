Warning

- It includes react-spring as dependency (31.79KB)

Overlay :

```js
import Button from '../Button';
import Toggle from '../Toggle';

<Toggle>
  {({ on, toggle }) => (
    <div>
      <Button onClick={toggle}>Open overlay</Button>
      <Overlay onClick={toggle} on={on} />
    </div>
  )}
</Toggle>;
```
