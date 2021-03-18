import 'bootstrap/scss/bootstrap';
import React, {useEffect} from 'react';

export function AdminPanel() {
  useEffect(() => {
    async function loadPages() {
      await import('./bootstrap');
    }

    loadPages();
  }, []);

  return null;
}
