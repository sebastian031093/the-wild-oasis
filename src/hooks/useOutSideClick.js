import { useRef, useEffect } from 'react';

export function useOutSideClick(handle, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          handle();
        }
      }
      document.addEventListener('click', handleClick, listenCapturing);
      return () => document.addEventListener('click', handleClick, listenCapturing);
    },
    [handle]
  );

  return { ref };
}
