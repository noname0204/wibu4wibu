import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import App from '~/App';

createRoot(document.getElementById('app-root')!).render(
  <BrowserRouter>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </BrowserRouter>
);
