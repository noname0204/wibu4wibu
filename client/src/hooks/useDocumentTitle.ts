import { useEffect } from 'react';

const useSetDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = 'WibuForWibu - ' + title;

    return () => {
      document.title = 'WibuForWibu - Theo dõi anime mọi lúc, mọi nơi';
    };
  }, [title]);
};

export default useSetDocumentTitle;
