Sidebar:

- Sidebar use Portal component, check Portal section to add configuration.
- Choose width Sidebar with props as a string, you can precise units like `px` or `%` for exemple.

```js
import Button from '../Button';
import Overlay from '../Overlay';
import Toggle from '../Toggle';

<Toggle>
  {({ on, toggle }) => (
    <div>
      <h4>Sidebar left (default position)</h4>
      <Button onClick={toggle}>sidebar</Button>
      <Overlay onClick={toggle} on={on} />
      <Sidebar on={on} toggle={toggle} width="200px">
        <div style={{ padding: 16 }}>
          <h4>Sidebar width 200px</h4>
          <Button onClick={toggle}>Close trigger</Button>
        </div>
      </Sidebar>
    </div>
  )}
</Toggle>;
```

```js
import Button from '../Button';
import Toggle from '../Toggle';
import Overlay from '../Overlay';

<Toggle>
  {({ on, toggle }) => (
    <div>
      <Overlay onClick={toggle} on={on} />
      <h4>Sidebar Right</h4>
      <Button onClick={toggle}>Sidebar</Button>
      <Sidebar on={on} toggle={toggle} width="50%" position="right">
        <div style={{ padding: 16 }}>
          <h4>Sidebar width 50% </h4>
          <Button onClick={toggle}>Close trigger</Button>
        </div>
      </Sidebar>
    </div>
  )}
</Toggle>;
```
