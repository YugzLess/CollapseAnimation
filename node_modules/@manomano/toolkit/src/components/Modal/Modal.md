Warning

- It includes react-spring as dependency (31.79KB)

Modal:

- Modal use Portal Component, check configuration in Portal section.
- Use Toggle Component to display Modal easily.
- Display Header as a string or render function or nothing.
- Display Footer with close button or nothing.
- Display iframe.

Tips:

- If you need to display an iframe in Modal, set props "hasIframe" at true to fix width.

```js
import Button from '../Button';
import Layout from '../Layout';
import Toggle from '../Toggle';
import Wrapper from '../Wrapper';

<Layout direction="column" styleGuidist>
  <h4 className="h4">Modal with Header as string and default footer</h4>
  <Toggle>
    {({ on, toggle }) => (
      <div>
        <Button onClick={toggle}>Modal</Button>
        <Modal on={on} toggle={toggle} header="Modal title as a string props">
          <Wrapper>
            <p className="p">body render with children</p>
          </Wrapper>
        </Modal>
      </div>
    )}
  </Toggle>
</Layout>;
```

```js
import Button from '../Button';
import Layout from '../Layout';
import Toggle from '../Toggle';
import Wrapper from '../Wrapper';

<Layout direction="column" styleGuidist>
  <h4 className="h4">Modal without Header and Footer</h4>
  <Toggle>
    {({ on, toggle }) => (
      <div>
        <Button onClick={toggle}>Modal</Button>
        <Modal on={on} toggle={toggle} noFooter>
          <Wrapper>
            <p className="p">
              Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle fizzle fo shizzle luctus check it out
              shit shiznit my shizz Curae; Crunk for sure nulla quis ghetto
              ornare tellivizzle. Phasellus yo erizzle. Fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle volutpat accumsan break yo neck, yall.
              Sure diam daahng dawg, adipiscing vitae, gravida izzle, interdum
              you son of a bizzle, ante. pizzle bibendum maurizzle. in elit
              izzle augue porta break it down. Nam sed augue. Crazy sagittis.
              Shit eu lacus quis boofron posuere get down get down. Black own
              yo' tellizzle stuff felis crunk mollizzle. Integer odio. Fo
              shizzle scelerisque. Black magna eros, sheezy ass, porttitizzle
              dawg, imperdizzle egestas, fo shizzle my nizzle. Integer commodo
              break yo neck, yall lectizzle. Etiam sollicitudizzle for sure
              sizzle. Bow wow wow mi eros, convallis izzle, pellentesque
              yippiyo, ultricizzle crackalackin, nibh. Fusce erizzle crunk,
              facilisizzle eu, sollicitudizzle shiznit, shizznit ma nizzle,
              lectizzle. Fusce mauris dang, get down get down shit, adipiscing
              ut, shiznit sizzle amizzle, dope.
            </p>
          </Wrapper>
        </Modal>
      </div>
    )}
  </Toggle>
</Layout>;
```

```js
import Button from '../Button';
import Layout from '../Layout';
import Toggle from '../Toggle';
import Wrapper from '../Wrapper';

<Layout direction="column" styleGuidist>
  <h4 className="h4">Modal with big body content</h4>
  <Toggle>
    {({ on, toggle }) => (
      <div>
        <Button onClick={toggle}>Modal</Button>
        <Modal on={on} toggle={toggle} header="Modal title as a string props">
          <Wrapper>
            <p className="p">
              Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle fizzle fo shizzle luctus check it out
              shit shiznit my shizz Curae; Crunk for sure nulla quis ghetto
              ornare tellivizzle. Phasellus yo erizzle. Fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle volutpat accumsan break yo neck, yall.
              Sure diam daahng dawg, adipiscing vitae, gravida izzle, interdum
              you son of a bizzle, ante. pizzle bibendum maurizzle. in elit
              izzle augue porta break it down. Nam sed augue. Crazy sagittis.
              Shit eu lacus quis boofron posuere get down get down. Black own
              yo' tellizzle stuff felis crunk mollizzle. Integer odio. Fo
              shizzle scelerisque. Black magna eros, sheezy ass, porttitizzle
              dawg, imperdizzle egestas, fo shizzle my nizzle. Integer commodo
              break yo neck, yall lectizzle. Etiam sollicitudizzle for sure
              sizzle. Bow wow wow mi eros, convallis izzle, pellentesque
              yippiyo, ultricizzle crackalackin, nibh. Fusce erizzle crunk,
              facilisizzle eu, sollicitudizzle shiznit, shizznit ma nizzle,
              lectizzle. Fusce mauris dang, get down get down shit, adipiscing
              ut, shiznit sizzle amizzle, dope.
            </p>
            <p className="p">
              Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle fizzle fo shizzle luctus check it out
              shit shiznit my shizz Curae; Crunk for sure nulla quis ghetto
              ornare tellivizzle. Phasellus yo erizzle. Fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle volutpat accumsan break yo neck, yall.
              Sure diam daahng dawg, adipiscing vitae, gravida izzle, interdum
              you son of a bizzle, ante. pizzle bibendum maurizzle. in elit
              izzle augue porta break it down. Nam sed augue. Crazy sagittis.
              Shit eu lacus quis boofron posuere get down get down. Black own
              yo' tellizzle stuff felis crunk mollizzle. Integer odio. Fo
              shizzle scelerisque. Black magna eros, sheezy ass, porttitizzle
              dawg, imperdizzle egestas, fo shizzle my nizzle. Integer commodo
              break yo neck, yall lectizzle. Etiam sollicitudizzle for sure
              sizzle. Bow wow wow mi eros, convallis izzle, pellentesque
              yippiyo, ultricizzle crackalackin, nibh. Fusce erizzle crunk,
              facilisizzle eu, sollicitudizzle shiznit, shizznit ma nizzle,
              lectizzle. Fusce mauris dang, get down get down shit, adipiscing
              ut, shiznit sizzle amizzle, dope.
            </p>
            <p className="p">
              Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle fizzle fo shizzle luctus check it out
              shit shiznit my shizz Curae; Crunk for sure nulla quis ghetto
              ornare tellivizzle. Phasellus yo erizzle. Fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle volutpat accumsan break yo neck, yall.
              Sure diam daahng dawg, adipiscing vitae, gravida izzle, interdum
              you son of a bizzle, ante. pizzle bibendum maurizzle. in elit
              izzle augue porta break it down. Nam sed augue. Crazy sagittis.
              Shit eu lacus quis boofron posuere get down get down. Black own
              yo' tellizzle stuff felis crunk mollizzle. Integer odio. Fo
              shizzle scelerisque. Black magna eros, sheezy ass, porttitizzle
              dawg, imperdizzle egestas, fo shizzle my nizzle. Integer commodo
              break yo neck, yall lectizzle. Etiam sollicitudizzle for sure
              sizzle. Bow wow wow mi eros, convallis izzle, pellentesque
              yippiyo, ultricizzle crackalackin, nibh. Fusce erizzle crunk,
              facilisizzle eu, sollicitudizzle shiznit, shizznit ma nizzle,
              lectizzle. Fusce mauris dang, get down get down shit, adipiscing
              ut, shiznit sizzle amizzle, dope.
            </p>
            <p className="p">
              Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle fizzle fo shizzle luctus check it out
              shit shiznit my shizz Curae; Crunk for sure nulla quis ghetto
              ornare tellivizzle. Phasellus yo erizzle. Fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle volutpat accumsan break yo neck, yall.
              Sure diam daahng dawg, adipiscing vitae, gravida izzle, interdum
              you son of a bizzle, ante. pizzle bibendum maurizzle. in elit
              izzle augue porta break it down. Nam sed augue. Crazy sagittis.
              Shit eu lacus quis boofron posuere get down get down. Black own
              yo' tellizzle stuff felis crunk mollizzle. Integer odio. Fo
              shizzle scelerisque. Black magna eros, sheezy ass, porttitizzle
              dawg, imperdizzle egestas, fo shizzle my nizzle. Integer commodo
              break yo neck, yall lectizzle. Etiam sollicitudizzle for sure
              sizzle. Bow wow wow mi eros, convallis izzle, pellentesque
              yippiyo, ultricizzle crackalackin, nibh. Fusce erizzle crunk,
              facilisizzle eu, sollicitudizzle shiznit, shizznit ma nizzle,
              lectizzle. Fusce mauris dang, get down get down shit, adipiscing
              ut, shiznit sizzle amizzle, dope.
            </p>
            <p className="p">
              Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle fizzle fo shizzle luctus check it out
              shit shiznit my shizz Curae; Crunk for sure nulla quis ghetto
              ornare tellivizzle. Phasellus yo erizzle. Fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle volutpat accumsan break yo neck, yall.
              Sure diam daahng dawg, adipiscing vitae, gravida izzle, interdum
              you son of a bizzle, ante. pizzle bibendum maurizzle. in elit
              izzle augue porta break it down. Nam sed augue. Crazy sagittis.
              Shit eu lacus quis boofron posuere get down get down. Black own
              yo' tellizzle stuff felis crunk mollizzle. Integer odio. Fo
              shizzle scelerisque. Black magna eros, sheezy ass, porttitizzle
              dawg, imperdizzle egestas, fo shizzle my nizzle. Integer commodo
              break yo neck, yall lectizzle. Etiam sollicitudizzle for sure
              sizzle. Bow wow wow mi eros, convallis izzle, pellentesque
              yippiyo, ultricizzle crackalackin, nibh. Fusce erizzle crunk,
              facilisizzle eu, sollicitudizzle shiznit, shizznit ma nizzle,
              lectizzle. Fusce mauris dang, get down get down shit, adipiscing
              ut, shiznit sizzle amizzle, dope.
            </p>
            <p className="p">
              Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle fizzle fo shizzle luctus check it out
              shit shiznit my shizz Curae; Crunk for sure nulla quis ghetto
              ornare tellivizzle. Phasellus yo erizzle. Fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle volutpat accumsan break yo neck, yall.
              Sure diam daahng dawg, adipiscing vitae, gravida izzle, interdum
              you son of a bizzle, ante. pizzle bibendum maurizzle. in elit
              izzle augue porta break it down. Nam sed augue. Crazy sagittis.
              Shit eu lacus quis boofron posuere get down get down. Black own
              yo' tellizzle stuff felis crunk mollizzle. Integer odio. Fo
              shizzle scelerisque. Black magna eros, sheezy ass, porttitizzle
              dawg, imperdizzle egestas, fo shizzle my nizzle. Integer commodo
              break yo neck, yall lectizzle. Etiam sollicitudizzle for sure
              sizzle. Bow wow wow mi eros, convallis izzle, pellentesque
              yippiyo, ultricizzle crackalackin, nibh. Fusce erizzle crunk,
              facilisizzle eu, sollicitudizzle shiznit, shizznit ma nizzle,
              lectizzle. Fusce mauris dang, get down get down shit, adipiscing
              ut, shiznit sizzle amizzle, dope.
            </p>
            <p className="p">
              Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle fizzle fo shizzle luctus check it out
              shit shiznit my shizz Curae; Crunk for sure nulla quis ghetto
              ornare tellivizzle. Phasellus yo erizzle. Fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle volutpat accumsan break yo neck, yall.
              Sure diam daahng dawg, adipiscing vitae, gravida izzle, interdum
              you son of a bizzle, ante. pizzle bibendum maurizzle. in elit
              izzle augue porta break it down. Nam sed augue. Crazy sagittis.
              Shit eu lacus quis boofron posuere get down get down. Black own
              yo' tellizzle stuff felis crunk mollizzle. Integer odio. Fo
              shizzle scelerisque. Black magna eros, sheezy ass, porttitizzle
              dawg, imperdizzle egestas, fo shizzle my nizzle. Integer commodo
              break yo neck, yall lectizzle. Etiam sollicitudizzle for sure
              sizzle. Bow wow wow mi eros, convallis izzle, pellentesque
              yippiyo, ultricizzle crackalackin, nibh. Fusce erizzle crunk,
              facilisizzle eu, sollicitudizzle shiznit, shizznit ma nizzle,
              lectizzle. Fusce mauris dang, get down get down shit, adipiscing
              ut, shiznit sizzle amizzle, dope.
            </p>
            <p className="p">
              Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle fizzle fo shizzle luctus check it out
              shit shiznit my shizz Curae; Crunk for sure nulla quis ghetto
              ornare tellivizzle. Phasellus yo erizzle. Fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle volutpat accumsan break yo neck, yall.
              Sure diam daahng dawg, adipiscing vitae, gravida izzle, interdum
              you son of a bizzle, ante. pizzle bibendum maurizzle. in elit
              izzle augue porta break it down. Nam sed augue. Crazy sagittis.
              Shit eu lacus quis boofron posuere get down get down. Black own
              yo' tellizzle stuff felis crunk mollizzle. Integer odio. Fo
              shizzle scelerisque. Black magna eros, sheezy ass, porttitizzle
              dawg, imperdizzle egestas, fo shizzle my nizzle. Integer commodo
              break yo neck, yall lectizzle. Etiam sollicitudizzle for sure
              sizzle. Bow wow wow mi eros, convallis izzle, pellentesque
              yippiyo, ultricizzle crackalackin, nibh. Fusce erizzle crunk,
              facilisizzle eu, sollicitudizzle shiznit, shizznit ma nizzle,
              lectizzle. Fusce mauris dang, get down get down shit, adipiscing
              ut, shiznit sizzle amizzle, dope.
            </p>
            <p className="p">
              Vestibulizzle ante yo mamma primis fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle fizzle fo shizzle luctus check it out
              shit shiznit my shizz Curae; Crunk for sure nulla quis ghetto
              ornare tellivizzle. Phasellus yo erizzle. Fo shizzle mah nizzle fo
              rizzle, mah home g-dizzle volutpat accumsan break yo neck, yall.
              Sure diam daahng dawg, adipiscing vitae, gravida izzle, interdum
              you son of a bizzle, ante. pizzle bibendum maurizzle. in elit
              izzle augue porta break it down. Nam sed augue. Crazy sagittis.
              Shit eu lacus quis boofron posuere get down get down. Black own
              yo' tellizzle stuff felis crunk mollizzle. Integer odio. Fo
              shizzle scelerisque. Black magna eros, sheezy ass, porttitizzle
              dawg, imperdizzle egestas, fo shizzle my nizzle. Integer commodo
              break yo neck, yall lectizzle. Etiam sollicitudizzle for sure
              sizzle. Bow wow wow mi eros, convallis izzle, pellentesque
              yippiyo, ultricizzle crackalackin, nibh. Fusce erizzle crunk,
              facilisizzle eu, sollicitudizzle shiznit, shizznit ma nizzle,
              lectizzle. Fusce mauris dang, get down get down shit, adipiscing
              ut, shiznit sizzle amizzle, dope.
            </p>
          </Wrapper>
        </Modal>
      </div>
    )}
  </Toggle>
</Layout>;
```

```js
import Button from '../Button';
import Iframe from '../Iframe';
import Layout from '../Layout';
import Toggle from '../Toggle';

<Layout direction="column" styleGuidist>
  <h4 className="h4">Modal with iframe content</h4>
  <Toggle>
    {({ on, toggle }) => (
      <div>
        <Button onClick={toggle}>Modal</Button>
        <Modal
          on={on}
          toggle={toggle}
          header="Modal title as a string props"
          hasIframe
        >
          <Iframe
            id="manomano"
            title="manomano"
            src="https://www.manomano.fr/"
          />
        </Modal>
      </div>
    )}
  </Toggle>
</Layout>;
```
