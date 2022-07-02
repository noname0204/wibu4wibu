import { useEffect } from 'react';

const useSetDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = 'MyanimeworldZ - ' + title;

    return () => {
      document.title = 'MyanimeworldZ - Theo dõi anime mọi lúc, mọi nơi';
    };
  }, [title]);
};

export default useSetDocumentTitle;
