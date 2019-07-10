Warning

- It includes react-spring as dependency (31.79KB)

Toggle Down:

- Toggle Down sets hide/show content with smooth animation.
- Toggle Down component needs to be wrap with <b>Toggle</b> component like in exemple. Read <b>Toggle</b> section to get more information.

```js
import Button from '../Button';
import Layout from '../Layout';
import Toggle from '../Toggle';
import ToggleDown from '../ToggleDown';

<Layout direction="column" styleGuidist>
  <Toggle>
    {({ on, toggle }) => (
      <div>
        <Button onClick={toggle} style={{ marginBottom: '16px' }}>
          Trigger
        </Button>
        <ToggleDown on={on}>
          <h3>Toggle Down content to be hide</h3>
          <p>
            Look, just because I don't be givin' no man a foot massage don't
            make it right for Marsellus to throw Antwone into a glass
            motherfuckin' house, fuckin' up the way the nigger talks.
            Motherfucker do that shit to me, he better paralyze my ass, 'cause
            I'll kill the motherfucker, know what I'm sayin'?
          </p>
          <p>
            Normally, both your asses would be dead as fucking fried chicken,
            but you happen to pull this shit while I'm in a transitional period
            so I don't wanna kill you, I wanna help you.
          </p>
          <h4>Title</h4>
          <p>
            Now that there is the Tec-9, a crappy spray gun from South Miami.
            This gun is advertised as the most popular gun in American crime. Do
            you believe that shit? It actually says that in the little book that
            comes with it: the most popular gun in American crime. Like they're
            actually proud of that shit.
          </p>
        </ToggleDown>
      </div>
    )}
  </Toggle>
</Layout>;
```
