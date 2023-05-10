import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { BrowserRouter } from 'react-router-dom';
import { mockFilms } from './mocks/mock-films';
import { mockPromo } from './mocks/mock-promo';
import { mockFilmsLikly } from './mocks/mock-films-likly';
// import { mockReviews } from './mocks/mock-reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App filmsToShow={mockFilms} promoToShow={mockPromo} liklyFilmsToShow={mockFilmsLikly}/>
    </BrowserRouter>
  </React.StrictMode>,
);
