import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import App from './components/app/app';
import { mockFilms } from './mocks/mock-films';
import { mockFilmsLikly } from './mocks/mock-films-likly';

// import { mockReviews } from './mocks/mock-reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App filmsToShow={mockFilms} liklyFilmsToShow={mockFilmsLikly}/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
