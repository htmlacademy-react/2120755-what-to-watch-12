import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import App from './components/app/app';
import { mockFilms } from './mocks/mock-films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App filmsToShow={mockFilms} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
