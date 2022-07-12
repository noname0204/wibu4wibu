import { createRoot } from 'react-dom/client';
import store from '~/store';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyles from '~/components/GlobalStyles';
import AuthNavigate from './components/AuthNavigate';
import App from '~/App';

createRoot(document.getElementById('app-root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyles>
        <AuthNavigate>
          <App />
        </AuthNavigate>
      </GlobalStyles>
    </Provider>
  </BrowserRouter>
);
