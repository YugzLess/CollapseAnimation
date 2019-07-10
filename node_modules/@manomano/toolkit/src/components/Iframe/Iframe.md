Iframe example:

- An iframe need to be wrap with a div with width and height defined.
- Please set Wrapper with overflow hidden.

```js
const style = {
  position: 'relative',
  width: '100%',
  height: 300,
  overflow: 'hidden',
};

<div style={style}>
  <Iframe id="w3c" title="w3c" src="https://www.w3.org/" />
</div>;
```
