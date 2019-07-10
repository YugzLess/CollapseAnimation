Warning

- It includes react-spring as dependency (31.79KB)

<b>Tabs:</b>

- Just add label props on every children.
- Set props 'isDefaultActive' (boolean) to choose default tab active on mounted component.

<b>Tips :</b>

- In case of multiple arrays, you should concat all arrays as last exemple.

```js
import Card from '../Card';
import Tab from './Tab';

<Tabs>
  <Tab label="Label One">
    <p>
      Dizzle crackalackin dolor. Fusce magna bow wow wow, dignissizzle sizzle
      things, fringilla egizzle, sollicitudizzle nizzle, break yo neck, yall.
      Maecenizzle gangster nisi. Sed malesuada neque izzle away. Suspendisse
      erat. You son of a bizzle mammasay mammasa mamma oo sa tristique turpis.
      Suspendisse blandit ultricizzle sheezy. Shit dolor da bomb, its fo rizzle
      interdizzle, rizzle daahng dawg, dang et, . Suspendisse mah nizzle shut
      the shizzle up. Gizzle aliquizzle pimpin' sizzle that's the shizzle dolor.
      Fusce dapibizzle da bomb izzle arcu. Lorem ass sizzle boofron amizzle,
      consectetuer gizzle hizzle. Gangsta massa purizzle, eleifend laorizzle,
      ullamcorper pimpin', yo mamma non, i saw beyonces tizzles and my pizzle
      went crizzle. Nam shiz rutrizzle check out this.
    </p>
    <Card>
      <h4>Component</h4>
      <p>
        Dizzle crackalackin dolor. Fusce magna bow wow wow, dignissizzle sizzle
        things, fringilla egizzle, sollicitudizzle nizzle, break yo neck, yall.
        Maecenizzle gangster nisi. Sed malesuada neque izzle away. Suspendisse
        erat. You son of a bizzle mammasay mammasa mamma oo sa tristique turpis.
        Suspendisse blandit ultricizzle sheezy. Shit dolor da bomb, its fo
        rizzle interdizzle, rizzle daahng dawg, dang et, . Suspendisse mah
        nizzle shut the shizzle up. Gizzle aliquizzle pimpin' sizzle that's the
        shizzle dolor. Fusce dapibizzle da bomb izzle arcu. Lorem ass sizzle
        boofron amizzle, consectetuer gizzle hizzle. Gangsta massa purizzle,
        eleifend laorizzle, ullamcorper pimpin', yo mamma non, i saw beyonces
        tizzles and my pizzle went crizzle. Nam shiz rutrizzle check out this.
      </p>
    </Card>
  </Tab>

  <Tab label="Label Two">
    <h4>title</h4>
  </Tab>

  <Tab label={<span>Label Three</span>} isDefaultActive>
    <p>
      Lorizzle owned dolizzle ghetto amizzle, for sure adipiscing izzle. Dang
      shiz velizzle, away yo, suscipizzle quizzle, gravida vizzle, bow wow wow.
      Pellentesque eget tortor. Sizzle erizzle. Uhuh ... yih! izzle dolor da
      bomb the bizzle tempizzle boom shackalack. Shit sheezy dope et turpizzle.
      For sure in tortizzle. Daahng dawg doggy yo daahng dawg. Nizzle fizzle
      habitasse platea dictumst. Fo shizzle my nizzle dapibizzle. Fo shizzle
      tellus urna, pretizzle shizzlin dizzle, mattizzle izzle, eleifend , nunc.
      For sure suscipizzle. Check it out sempizzle velit ma nizzle mah nizzle.
    </p>
  </Tab>
</Tabs>;
```

Tabs with one child:

```js
import Tab from './Tab';

<Tabs>
  <Tab label="Label Solo">
    <p>
      Dizzle crackalackin dolor. Fusce magna bow wow wow, dignissizzle sizzle
      things, fringilla egizzle, sollicitudizzle nizzle, break yo neck, yall.
      Maecenizzle gangster nisi. Sed malesuada neque izzle away. Suspendisse
      erat. You son of a bizzle mammasay mammasa mamma oo sa tristique turpis.
      Suspendisse blandit ultricizzle sheezy. Shit dolor da bomb, its fo rizzle
      interdizzle, rizzle daahng dawg, dang et, . Suspendisse mah nizzle shut
      the shizzle up. Gizzle aliquizzle pimpin' sizzle that's the shizzle dolor.
      Fusce dapibizzle da bomb izzle arcu. Lorem ass sizzle boofron amizzle,
      consectetuer gizzle hizzle. Gangsta massa purizzle, eleifend laorizzle,
      ullamcorper pimpin', yo mamma non, i saw beyonces tizzles and my pizzle
      went crizzle. Nam shiz rutrizzle check out this.
    </p>
  </Tab>
</Tabs>;
```

Tabs with multiple arrays:

```js
import Tab from './Tab';

test = ['Tab1', 'Tab2'];
test2 = ['Tab3', 'Tab4'];

const result = test.concat(test2);

<Tabs>
  {result.map((key, i) => (
    <Tab key={key} label={key} isDefaultActive={key === 'Tab4'}>
      {key} element
    </Tab>
  ))}
</Tabs>;
```
