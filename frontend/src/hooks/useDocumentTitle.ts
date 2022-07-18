import { useEffect } from 'react';

const useSetDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = 'World4Wibu - ' + title;

    return () => {
      document.title = 'World4Wibu - Theo dõi anime mọi lúc, mọi nơi';
    };
  }, [title]);
};

export default useSetDocumentTitle;
