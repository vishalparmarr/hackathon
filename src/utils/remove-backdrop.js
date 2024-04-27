import { useEffect } from 'react';
import { useRouter } from 'next/router';

function RemoveModalBackdrop() {
  const router = useRouter();

  useEffect(() => {
    const removeBackdrop = () => {
      const modalBackdrop = document.querySelector('.modal-backdrop fade show');
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

export default RemoveModalBackdrop;
