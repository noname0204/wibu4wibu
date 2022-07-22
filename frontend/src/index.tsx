import { createRoot } from 'react-dom/client';
import store from '~/store';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import GlobalStyles, { theme } from '~/components/GlobalStyles';
import App from '~/App';

if (import.meta.env.PROD) disableReactDevTools();

createRoot(document.getElementById('app-root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
