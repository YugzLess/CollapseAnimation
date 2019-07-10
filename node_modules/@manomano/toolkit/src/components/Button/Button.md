Default Button:

```js
import Button from '../Button';
import Layout from '../Layout';

<Layout styleGuidist direction="row">
  <Button>default Button</Button>
  <Button theme="primary">primary Button</Button>
  <Button theme="secondary">secondary Button</Button>
  <Button theme="ghost">ghost Button</Button>
  <Button theme="reset">reset style Button</Button>
  <Button theme="link">Link Button</Button>
  <Button disabled>disabled Button</Button>
</Layout>;
```

Button Size:

```js
import Button from '../Button';
import Layout from '../Layout';

<Layout styleGuidist direction="row">
  <Button size="big">big button</Button>
  <Button>default button</Button>
  <Button size="small">small button</Button>
  <Button size="xsmall">xsmall button</Button>
</Layout>;
```

Icon Button:

```js
import Button from '../Button';
import IconEdit from '../Icon/Icons/IconEdit';
import Layout from '../Layout';

<Layout styleGuidist direction="row">
  <Button size="big" iconComponent={IconEdit}>
    Button
  </Button>
  <Button iconComponent={IconEdit}>Button</Button>
  <Button size="small" iconComponent={IconEdit}>
    Button
  </Button>
  <Button size="xsmall" iconComponent={IconEdit}>
    Button
  </Button>
</Layout>;
```

Icon Reverse Button:

```js
import Button from '../Button';
import IconEdit from '../Icon/Icons/IconEdit';
import Layout from '../Layout';

<Layout styleGuidist direction="row">
  <Button theme="primary" size="big" iconComponent={IconEdit} reverse>
    Button
  </Button>
  <Button theme="primary" iconComponent={IconEdit} reverse>
    Button
  </Button>
  <Button theme="primary" size="small" iconComponent={IconEdit} reverse>
    Button
  </Button>
  <Button theme="primary" size="xsmall" iconComponent={IconEdit} reverse>
    Button
  </Button>
</Layout>;
```

Icon only Button:

```js
import Button from '../Button';
import IconEdit from '../Icon/Icons/IconEdit';
import Layout from '../Layout';

<Layout styleGuidist direction="row">
  <Button size="big" iconComponent={IconEdit} />
  <Button iconComponent={IconEdit} />
  <Button iconComponent={IconEdit} theme="reset" fill="#424242" />
  <Button size="small" iconComponent={IconEdit} />
  <Button size="xsmall" iconComponent={IconEdit} />
</Layout>;
```
