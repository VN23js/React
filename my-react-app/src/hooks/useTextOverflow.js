import { useState, useLayoutEffect } from 'react';

export const useTextOverflow = (textRef, edit) => {
  const [showMoreButton, setShowMoreButton] = useState(false);

  useLayoutEffect(() => {
    if (!textRef.current) return;
    let lastWidth = window.innerWidth;

    const checkOverflow = () => {
      if (!textRef.current) return;
      const el = textRef.current;
      setShowMoreButton(el.scrollHeight > el.clientHeight);
    };

    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth !== lastWidth) {
        lastWidth = currentWidth;
        checkOverflow();
      }
    };

    checkOverflow();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [edit]);

  return showMoreButton;
};
