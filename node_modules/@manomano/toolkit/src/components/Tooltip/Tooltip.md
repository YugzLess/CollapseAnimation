Warning

- It includes react-spring as dependency (31.79KB)

Tooltip:

- <b>Tooltip</b> uses <b>Portal</b> component who need some adding to work. Read Portal section to get more information.
- Tooltip works fine with version of react >= <b>16.4</b>
- content can be render a string or function.

Tooltip default:

```js
<p>
  This is a text with tooltip,
  <b>
    <Tooltip content="Awesome, i'm in Portal so no z-index and overflow conflict, Awesome, i'm in Portal so no z-index and overflow conflict, Awesome, i'm in Portal so no z-index and overflow conflict, Awesome, i'm in Portal so no z-index and overflow conflict">
      hover me
    </Tooltip>
  </b>
</p>
```

Tooltip bottom :

```js
<p>
  This is a text with tooltip,
  <b>
    <Tooltip position="bottom" content="Awesome">
      hover me
    </Tooltip>
  </b>
</p>
```

Tooltip left :

```js
<p>
  <b>
    <Tooltip
      position="left"
      content="Awesome, i'm in Portal so no z-index and overflow conflict"
    >
      hover me
    </Tooltip>
  </b>
</p>
```

Tooltip right :

```js
<p>
  This is a text with tooltip,
  <b>
    <Tooltip
      position="right"
      content="Awesome, i'm in Portal so no z-index and overflow conflict"
    >
      hover me
    </Tooltip>
  </b>
</p>
```

Tooltip bottom :

```js
<p>
  This is a text with tooltip,
  <b>
    <Tooltip
      position="bottom"
      content="Awesome, You can add long sentence,  You can add long sentence,  You can add long sentence,"
    >
      hover me
    </Tooltip>
  </b>
</p>
```
