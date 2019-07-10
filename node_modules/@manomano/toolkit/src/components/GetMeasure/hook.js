import { useLayoutEffect, useState, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default () => {
  const ref = useRef(null);
  const [size, setSize] = useState({
    x: 0,
    y: 0,
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    const element = ref.current;
    const resizeObserver = new ResizeObserver(entries => {
      if (!Array.isArray(entries) || entries.length === 0) return;

      setSize(entries[0].target.getBoundingClientRect());
    });

    resizeObserver.observe(element);

    return () => resizeObserver.unobserve(element);
  }, []);

  return [size, ref];
};
