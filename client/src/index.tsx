import { createRoot } from 'react-dom/client';
import store, { persistor } from '~/store';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyles from '~/components/GlobalStyles';
import AuthNavigate from './components/AuthNavigate';
import App from '~/App';

createRoot(document.getElementById('app-root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles>
          <AuthNavigate>
            <App />
          </AuthNavigate>
        </GlobalStyles>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
