'use client';

import { useState, useEffect } from 'react';

export default function AlertBar({ message, show = false, onClose }) {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(show);

    // Auto-hide after 4 seconds (optional)
    if (show) {
      const timeout = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div className="bg-[#A8C53E] text-white font-semibold text-center py-2 px-4 text-sm sm:text-base">
      {message}{' '}
      <a href="/cart" className="underline font-bold text-white">
        Open Cart
      </a>
    </div>
  );
}
