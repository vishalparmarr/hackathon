import { useEffect } from 'react';
import { useRouter } from 'next/router';

function useRemoveBackdrop() {
  const router = useRouter();

  useEffect(() => {
    const removeBackdrop = () => {
      const modalBackdrop = document.querySelector('.modal-backdrop');
      if (modalBackdrop) {
        modalBackdrop.remove();
      }
    };

    router.events.on('routeChangeStart', removeBackdrop);
    return () => {
      router.events.off('routeChangeStart', removeBackdrop);
    };
  }, [router]);

  return null;
}

export default useRemoveBackdrop;

